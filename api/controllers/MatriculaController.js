const Sequelize = require('sequelize')
const { MatriculasServices } = require('../services')
const matriculasServices = new MatriculasServices()

class MatriculaController {

    // Consultar Matricula de ID pessoa
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const UmaMatricula = await matriculasServices.pegaUmRegistro({ id: Number(matriculaId), estudante_id: Number(estudanteId) })
            return res.status(200).json(UmaMatricula);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // // Criar Matricula de ID pessoa
    // static async criarUmaMatricula(req, res) {
    //     const { estudanteId } = req.params;
    //     const novaMatricula = {...req.body, estudante_id: Number(estudanteId)};
    //     try {
    //         if (Object.keys(novaMatricula).length === 0) {
    //             throw new Error('corpo da requisição vazio');
    //         }
    //         const criarMatricula = await database.Matriculas.create(novaMatricula)
    //         return res.status(200).json(criarMatricula);
    //     } catch (err) {
    //         return res.status(500).json(err.message);
    //     }
    // }

    // Criar Matricula de ID pessoa
    static async criarUmaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = req.body;
        try {
            if (Object.keys(novaMatricula).length === 0) {
                throw new Error('corpo da requisição vazio');
            }
            const criarMatricula = await matriculasServices.criaRegistro({ ...novaMatricula, estudante_id: Number(estudanteId) })
            return res.status(201).json(criarMatricula);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Atualizar Matricula de ID pessoa
    static async atualizarUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            if (Object.keys(novasInfos).length === 0) {
                throw new Error('corpo da requisição vazio');
            }
            await matriculasServices.atualizaRegistro(novasInfos, { id: Number(matriculaId), estudante_id: Number(estudanteId) })
            return res.status(200).json({ mensage: 'mensagem desucesso', content: MatriculaAtualizada });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    // Apagar Matricula de ID pessoa
    static async apagaMatricula(req, res) {
        const { matriculaId } = req.params
        try {
            await matriculasServices.apagaResgistro({ id: Number(matriculaId) })
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Traga todas as matrículas confirmadas a respeito de certo estudante
    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await matriculasServices.pegaUmRegistro({ where: { id: Number(estudanteId) } })
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    // Consultar as matrículas por turma
    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        try {
            const todasAsMatriculas = await matriculasServices.encontraEContaRegistros({turma_id: Number(turmaId), status: 'confirmado'})
            // limit: 1,
            // order:[['estudante_id', 'DESC']]
            return res.status(200).json(todasAsMatriculas)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    // Consultar as Turmas lotadas
    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2
        try {
            const turmasLotadas = await matriculasServices
                .encontraEContaRegistros({status: 'confirmado'}, {attributes: ['turma_id'], group: ['turma_id'], having: Sequelize.literal(`count(turma_id >= ${lotacaoTurma}`)})
            return res.status(200).json(turmasLotadas.count)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = MatriculaController;

