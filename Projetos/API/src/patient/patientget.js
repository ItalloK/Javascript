const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM patient';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar pacientes:', err);
            res.status(500).json({ error: 'Erro ao buscar pacientes' });
            return;
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const patientId = req.params.id;
    const sql = 'SELECT * FROM patient WHERE id = ?';
    db.query(sql, [patientId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar paciente:', err);
            res.status(500).json({ error: 'Erro ao buscar paciente' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Paciente não encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

module.exports = router;
