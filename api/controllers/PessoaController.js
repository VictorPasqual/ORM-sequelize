// const database = require('../models');
// const Sequelize = require('sequelize');
const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController {

    // Read
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
            return res.status(200).json(todasAsPessoas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Read active people
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await pessoasServices.pegaRegistroAtivos();
            return res.status(200).json(pessoasAtivas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Read for ID
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const UmaPessoa = await pessoasServices.pegaUmRegistro({ id })
            return res.status(200).json(UmaPessoa);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Create
    static async cadastrarPessoas(req, res) {
        const NovaPessoa = req.body
        try {
            if (Object.keys(NovaPessoa).length === 0) {
                throw new Error('corpo da requisição vazio');
            }
            const Registrar = await pessoasServices.criaRegistro(NovaPessoa);
            return res.status(201).json({ message: 'Pessoa criada', content: Registrar });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Update
    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const MudarPessoa = req.body
        try {
            await pessoasServices.atualizaRegistro(MudarPessoa, Number(id))
            return res.status(204).json({ message: 'Pessoa Atualizada', content: Atualizar });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Delete
    static async deletarPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.apagaRegistro(Number(id));
            return res.status(200).json({ message: 'Pessoa excluída' });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Recover
    static async restauraPessoa(req, res) {
        const { id } = req.params;
        try {
            const registroRestarado = await pessoasServices.restauraPessoa(Number(id));
            return res.status(200).json(registroRestarado)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params
        try {

            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
            return res.status(200).json({ message: `matriculas ref. estudante ${estudanteId}, cancelado` })

        } catch (err) {
            return res.status(500).json(err.message)
        }y
    }

}

module.exports = PessoaController;
