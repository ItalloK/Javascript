const express = require('express');
const db = require('../../db/database.js');
const router = express.Router();

router.post('/', (req, res) => {
    const { staff_name, staff_email, staff_password, staff_cpf, staff_phonenumber, staff_nivel, idstaff } = req.body;
    
    if (!staff_name || !staff_email || !staff_password || !staff_cpf || !staff_phonenumber || !staff_nivel || !idstaff) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }
    const sql = `
        UPDATE staff SET staff_name = ?, staff_email = ?, staff_password = ?, staff_cpf = ?, staff_phonenumber = ?, staff_nivel = ? WHERE idstaff = ? 
    `;
    db.query(sql, [staff_name, staff_email, staff_password, staff_cpf, staff_phonenumber, staff_nivel, idstaff], (err, result) => {
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