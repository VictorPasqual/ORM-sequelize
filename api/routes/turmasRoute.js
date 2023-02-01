const { Router } = require('express');
const TurmaController = require("../controllers/TurmaController");

const router = Router();

router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .get('/turmas/docente/:docente_id', TurmaController.pegaDocenteTurmas)
    .get('/turmas/nivel/:nivel_id', TurmaController.pegaNiveisTurmas)
    .post('/turmas', TurmaController.registarTurmas)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)
    .put('/turmas/:id', TurmaController.atualizarTurma)
    .delete('/turmas/:id', TurmaController.deletarTurma)

module.exports = router 