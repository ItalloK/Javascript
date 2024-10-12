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

module.exports = router;