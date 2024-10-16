const express = require('express');
const db = require('./db/database.js');


const consultationRoutes = require('./src/consultation/consultationget');
const dependentRoutes = require('./src/dependent/dependentget');
const opening_hoursRoutes = require('./src/opening_hours/opening_hoursget');
const patientRoutes = require('./src/patient/patientget'); 
const staffRoutes = require('./src/staff/staffget');
const outherRoutes = require('./src/outhers/outhers');

const setConsultation = require('./src/consultation/consultationset');
const updateStaffRoute = require('./src/staff/updatestaff');
const setPatientRoute = require('./src/patient/patientset');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/consultation', consultationRoutes);
app.use('/api/dependent', dependentRoutes);
app.use('/api/hour', opening_hoursRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/outhers', outherRoutes);

app.use('/api/setconsultation', setConsultation);
app.use('/api/updatestaff', updateStaffRoute);
app.use('/api/patientset', setPatientRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
