const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM staff";
    db.query(sql, (err, results) => {
        if(err){
            console.error("Erro ao buscar Staff: " +err);
            res.status(500).json({error: "Erro ao buscar Staffs"});
            return;
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const patientId = req.params.id;
    const sql = 'SELECT * FROM staff WHERE idstaff = ?';
    db.query(sql, [patientId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar Staff:', err);
            res.status(500).json({ error: 'Erro ao buscar Staff' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Staff não encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

module.exports = router;