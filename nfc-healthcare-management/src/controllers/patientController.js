class PatientController {
    constructor(db) {
        this.db = db;
    }

    async registerPatient(req, res) {
        try {
            const patientData = req.body;
            const newPatientRef = this.db.ref('patients').push();
            await newPatientRef.set(patientData);
            res.status(201).json({ id: newPatientRef.key, ...patientData });
        } catch (error) {
            res.status(500).json({ error: 'Failed to register patient' });
        }
    }

    async retrievePatient(req, res) {
        try {
            const patientId = req.params.id;
            const patientRef = this.db.ref(`patients/${patientId}`);
            const snapshot = await patientRef.once('value');
            if (snapshot.exists()) {
                res.status(200).json(snapshot.val());
            } else {
                res.status(404).json({ error: 'Patient not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve patient data' });
        }
    }

    async updatePatient(req, res) {
        try {
            const patientId = req.params.id;
            const updatedData = req.body;
            const patientRef = this.db.ref(`patients/${patientId}`);
            await patientRef.update(updatedData);
            res.status(200).json({ id: patientId, ...updatedData });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update patient data' });
        }
    }

    async deletePatient(req, res) {
        try {
            const patientId = req.params.id;
            const patientRef = this.db.ref(`patients/${patientId}`);
            await patientRef.remove();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete patient record' });
        }
    }
}

module.exports = PatientController;