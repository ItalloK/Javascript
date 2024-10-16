const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, password, cpf, phone_number, nivel, id } = req.body;
    
    if (!name || !email || !password || !cpf || !phone_number || !nivel || !id) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }
    const sql = `
        UPDATE staff SET name = ?, email = ?, password = ?, cpf = ?, phone_number = ?, nivel = ? WHERE id = ? 
    `;
    db.query(sql, [name, email, password, cpf, phone_number, nivel, id], (err, result) => {
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