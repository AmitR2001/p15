const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const admin = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json'); // Update with the correct path to your service account key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com' // Update with your Firebase database URL
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});