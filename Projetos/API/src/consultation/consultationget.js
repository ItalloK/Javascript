const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

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