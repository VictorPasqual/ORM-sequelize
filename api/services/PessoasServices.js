const database = require('../models');
const Services = require('./Services')


class PessoasServices extends Services {
    constructor() {
        super('Pessoas')
    }
    //métodos especificos do controlador de Pessoas

    async pegaRegistroAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }


    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: { ...where } })
    }

    async cancelaPessoaEMatriculas(estudanteId) {
        database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao })
            await this.cancelaPessoaEMatriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
        })
    }

    async pegaMatriculasPorEstudante(where = {}) {
        const matriculas = await database[this.nomeDoModelo]
          .findOne({ where: { ...where } })
        return matriculas.getAulasMatriculadas()
      }
}

module.exports = PessoasServices