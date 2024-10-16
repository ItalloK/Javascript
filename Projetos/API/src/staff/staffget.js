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
    const sql = 'SELECT * FROM staff WHERE id = ?';
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

router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    const sql = 'SELECT * FROM staff WHERE email = ? AND password = ?';
    db.query(sql, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).json({ error: 'Erro ao buscar usuário' });
            return;
        }
        if (results.length === 0) {
            res.status(401).json({ error: 'Email ou senha inválidos' });
            return;
        }
        res.json(results[0]);
    });
});



module.exports = router;