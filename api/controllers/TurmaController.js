const { TurmasServices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const turmasService = new TurmasServices()

class TurmaController {

    // Read
    static async pegaTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}
        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        try {
            const todasAsTurmas = await turmasService.pegaTodosOsRegistros(where)
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Read for ID
    static async pegaUmaTurma(req, res) {
        const { id } = req.params
        try {
            const umaTurma = await turmasService.pegaUmRegistro(id)
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Read for docente ID
    static async pegaDocenteTurmas(req, res) {
        const { docente_id } = req.params
        try {
            const turmasDocente = await turmasService.pegaUmRegistro({ docente_id: Number(docente_id) })
            return res.status(200).json(turmasDocente)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Read for nivel ID
    static async pegaNiveisTurmas(req, res) {
        const { nivel_id } = req.params
        try {
            const turmasNiveis = await turmasService.pegaTodosOsRegistros({ nivel_id: Number(nivel_id) })
            return res.status(200).json(turmasNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Create
    static async registarTurmas(req, res) {
        const novaTurma = req.body
        try {
            if (Object.keys(novaTurma).length === 0) {
                throw new Error('corpo da requisição vazio');
            }
            const adicionarNovaTurma = await turmasService.criaRegistro(novaTurma);
            return res.status(201).json({ message: 'Turma criada', content: adicionarNovaTurma })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Update
    static async atualizarTurma(req, res) {
        const { id } = req.params
        const atualizar = req.body
        try {
            await turmasService.atualizaRegistro(atualizar, { id: Number(id) })
            const ajustarTurma = await dturmasService.pegaUmRegistro({ id: Number(id) })
            return res.status(200).json({ message: 'Turma Atualizada', content: ajustarTurma });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Delete
    static async deletarTurma(req, res) {
        const { id } = req.params;
        try {
            await turmasService.apagaResgistro({ id: Number(id) });
            return res.status(200).json({ message: 'Turma excluída' });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
            await turmasService.restauraRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmaController;
