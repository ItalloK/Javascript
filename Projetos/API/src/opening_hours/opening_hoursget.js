const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/:date', (req, res) => {
    const dateId = req.params.date;
    const sql = 'SELECT hours FROM opening_hours WHERE hours NOT IN ( SELECT consultation_hour FROM consultation WHERE consultation_date = ?)';
    db.query(sql, [dateId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar horarios:', err);
            res.status(500).json({ error: 'Erro ao buscar horarios' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Horario não encontrado' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;