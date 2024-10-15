const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.post('/', (req, res) => {
    const { birth_year, cpf, email, name, phone_number, password, ra } = req.body;
    
    if (!birth_year || !cpf || !email || !name || !phone_number || !password || !ra) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }
    const sql = `
        INSERT INTO patient (birth_year, cpf, email, name, phone_number, password, ra) VALUES ( ?, ?, ?, ?, ?, ?, ? ) 
    `;
    db.query(sql, [birth_year, cpf, email, name, phone_number, password, ra], (err, result) => {
        if (err) {
            console.error("Erro ao inserir Consulta: " + err);
            res.status(500).json({ error: "Erro ao inserir Consulta" });
            return;
        }
        res.status(201).json({ message: "Consulta inserida com sucesso", id: result.insertId });
        console.log("Confirmado");
    });
});


module.exports = router;