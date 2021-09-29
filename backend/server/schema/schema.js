
const alunosAttribs = `
    id: ID
    nome: String!
    cpf: String!
    email: String!
    createdAt:Boolean
    updatedAt:Boolean

`
const typeDefs = `
    type Aluno {
        ${alunosAttribs}
    }
    type Query {
        alunos: [Aluno]
    }
`
module.exports = typeDefs
