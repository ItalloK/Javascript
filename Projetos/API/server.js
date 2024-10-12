const express = require('express');
const db = require('./db/database.js');


const consultationRoutes = require('./src/consultation/consultationget');
const dependentRoutes = require('./src/dependent/dependentget');
const hibernate_sequencesRoutes = require('./src/hibernate_sequences/hibernate_sequencesget');
const opening_hoursRoutes = require('./src/opening_hours/opening_hoursget');
const patientRoutes = require('./src/patient/patientget'); 
const staffRoutes = require('./src/staff/staffget');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/consultation', consultationRoutes);
app.use('/api/dependent', dependentRoutes);
app.use('/api/hibernate_sequences', hibernate_sequencesRoutes);
app.use('/api/opening_houres', opening_hoursRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/staff', staffRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
