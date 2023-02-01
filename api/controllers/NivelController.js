// const database = require('../models');


const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {

    // Read
    static async pegaTodasAsNiveis(req, res) {
        try {
            const todasAsNiveis = await niveisServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Read for ID
    static async pegaUmNivel(req, res) {
        const { id } = req.params
        try {
            const umaNivel = await niveisServices.pegaUmRegistro({ id })
            return res.status(200).json(umaNivel)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Create
    static async registarNiveis(req, res) {
        const novaNivel = req.body
        try {
            if (Object.keys(novaNivel).length === 0) {
                throw new Error('corpo da requisição vazio');
            }
            const adicionarNovaNivel = await niveisServices.criaRegistro(novaNivel);
            return res.status(201).json({ message: 'Nivel criado', content: adicionarNovaNivel })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Update
    static async atualizarNivel(req, res) {
        const { id } = req.params
        const atualizar = req.body
        try {
            await niveisServices.atualizaRegistro(atualizar, { where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} atualizado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Delete
    static async deletarNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.apagaResgistro({ id: Number(id) });
            return res.status(200).json({ message: 'Nivel excluído' });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = NivelController;
