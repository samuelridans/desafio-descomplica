const Aluno = require('../alunos');
async function getAlunos() {
    const alunos = await Aluno.findAll({
        attributes: ['id','nome', 'email','cpf']
      });
    return alunos
}

module.exports = {
    Query: {
        alunos: async() => {
            try {
                return getAlunos();   
            } catch (error) {
                console.log(error);
            }
        } 
    }
}