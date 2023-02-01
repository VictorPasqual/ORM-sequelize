const { Router } = require('express');
const NivelController = require("../controllers/NivelController");

const router = Router();

router
    .get('/niveis', NivelController.pegaTodasAsNiveis)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .post('/niveis', NivelController.registarNiveis)
    // .post('/niveis/:id/restaura', NivelController.)  
    .put('/niveis/:id', NivelController.atualizarNivel)
    .delete('/niveis/:id', NivelController.deletarNivel)

module.exports = router 