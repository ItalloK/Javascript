const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();


router.get('/all/', (req, res) => {
    const sql = 'SELECT * FROM hour';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar horários:', err);
            return res.status(500).json({ error: 'Erro ao buscar horários' });
        }
        res.json(results);
    });
});

router.get('/:date', (req, res) => {
    const dateId = req.params.date;
    const sql = 'SELECT hour FROM hour WHERE hour NOT IN ( SELECT hour FROM consultation WHERE date = ?)';
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