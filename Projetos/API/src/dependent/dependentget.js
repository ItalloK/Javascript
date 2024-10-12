const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM dependent";
    db.query(sql, (err, results) => {
        if(err){
            console.error("Erro ao buscar dependent: "+err);
            res.status(500).json({error: "Erro ao buscar dependent"});
            return;
        }
        res.json(results);
    });
});

module.exports = router;