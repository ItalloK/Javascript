const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.post('/', (req, res) => {
    const { date, hour, status, patient_id } = req.body;
    // Validação simples para verificar se todos os campos necessários estão presentes
    if (!date || !hour || !status || !patient_id) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }
    const sql = `
        INSERT INTO consultation (date, hour, status, patient_id) 
        VALUES (?, ?, ?, ?)
    `;
    db.query(sql, [date, hour, status, patient_id], (err, result) => {
        if (err) {
            console.error("Erro ao inserir Consulta: " + err);
            res.status(500).json({ error: "Erro ao inserir Consulta" });
            return;
        }
        res.status(201).json({ message: "Consulta inserida com sucesso", id: result.insertId });
        console.log("Feito.")
    });
});


module.exports = router;