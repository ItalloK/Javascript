const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/:id', (req, res) => {
    const patientId = req.params.id;
    const sql = 'SELECT * FROM consultation WHERE patient_id = ?';
    db.query(sql, [patientId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar consultas:', err);
            res.status(500).json({ error: 'Erro ao buscar consultas' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'consultas não encontrado' });
            return;
        }
        res.json(results);
    });
});

router.get('/', (req, res) => {
    const sql = "SELECT * FROM consultation";
    db.query(sql, (err, results) => {
        if(err){
            console.error("Erro ao buscar Consultas: "+err);
            res.status(500).json({error: "Erro ao buscar Consultas"});
            return;
        }
        res.json(results);
    });
});

module.exports = router;