const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to register a new patient
router.post('/register', patientController.registerPatient);

// Route to retrieve patient data by ID
router.get('/retrieve/:id', patientController.retrievePatient);

// Route to update patient data
router.put('/update/:id', patientController.updatePatient);

// Route to delete a patient record
router.delete('/delete/:id', patientController.deletePatient);

module.exports = router;