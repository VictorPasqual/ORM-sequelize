const { Router } = require('express');
const PessoaController = require("../controllers/PessoaController");
const MatriculaController = require("../controllers/MatriculaController");

const router = Router();

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.cadastrarPessoas)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula', MatriculaController.criarUmaMatricula)
    .post('/pessoas/estudanteId/cancela', PessoaController.cancelaPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizarUmaMatricula)
    .delete ('/pessoas/:id', PessoaController.deletarPessoa)
    .delete ('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

module.exports = router