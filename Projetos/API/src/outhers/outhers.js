const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/all/', (req, res) => {
    const sql = "SELECT consultation.*, patient.cpf, patient.name FROM consultation INNER JOIN patient ON consultation.patient_id = patient.id ORDER BY consultation.consultation_date ASC;";
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
    const sql = "SELECT consultation.*, patient.cpf, patient.name FROM consultation INNER JOIN patient ON consultation.patient_id = patient.id WHERE consultation.consultation_status = 'Confirmada' ORDER BY consultation.consultation_date ASC;";
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
        WHERE consultation.consultation_status = 'Confirmada' 
        ORDER BY consultation.consultation_date ASC;
    `;
    
    // Executa a consulta ao banco de dados
    db.query(sql, (err, results) => {
        if (err) {
            // Tratamento de erro ao executar a consulta
            console.error("Erro ao buscar Consultas: ", err);
            return res.status(500).json({ error: "Erro ao buscar Consultas" });
        }
        
        // Verifica se há resultados e retorna
        if (results.length === 0) {
            return res.status(404).json({ message: "Nenhuma consulta confirmada encontrada" });
        }
        
        res.json(results); // Retorna os resultados da consulta
    });
});


module.exports = router;