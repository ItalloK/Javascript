const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/all/', (req, res) => {
    const sql = "SELECT consultation.*, patient.cpf, patient.name FROM consultation INNER JOIN patient ON consultation.patient_id = patient.id ORDER BY consultation.date ASC;";
    db.query(sql, (err, results) => {
        if(err){
            console.error("Erro ao buscar Consultas: "+err);
            res.status(500).json({error: "Erro ao buscar Consultas"});
            return;
        }
        res.json(results);
    });
});

router.get('/confirm/', (req, res) => {
    const sql = "SELECT consultation.*, patient.cpf, patient.name FROM consultation INNER JOIN patient ON consultation.patient_id = patient.id WHERE consultation.status = 'Confirmada' ORDER BY consultation.date ASC;";
    db.query(sql, (err, results) => {
        if(err){
            console.error("Erro ao buscar Consultas: "+err);
            res.status(500).json({error: "Erro ao buscar Consultas"});
            return;
        }
        res.json(results);
    });
});

router.get('/proximaconsulta/', (req, res) => {
    const sql = `
        SELECT consultation.*, patient.cpf, patient.name 
        FROM consultation 
        INNER JOIN patient ON consultation.patient_id = patient.id 
        WHERE consultation.status = 'Confirmada' 
        ORDER BY consultation.date ASC;
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erro ao buscar Consultas: ", err);
            return res.status(500).json({ error: "Erro ao buscar Consultas" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Nenhuma consulta confirmada encontrada" });
        }
        
        res.json(results);
    });
});


module.exports = router;