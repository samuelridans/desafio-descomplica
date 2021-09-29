const Sequelize = require('sequelize');
const sequelize = new Sequelize('devdescomplica', 'root', '1', {dialect: 'mysql', host: process.env.DATABASE_HOST, port:"3306"});
 
module.exports = sequelize;