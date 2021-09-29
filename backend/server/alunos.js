const Sequelize = require('sequelize');
const database = require('./db');
 
const Aluno = database.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
createdAt: {
    allowNull: true,
    type: Sequelize.DATE
    },
    updatedAt: {
    allowNull: true,
    type: Sequelize.DATE
    }
})
 
module.exports = Aluno;