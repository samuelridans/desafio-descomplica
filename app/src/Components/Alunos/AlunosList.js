import React from 'react';
import "./AlunosList.css";
import AlunoItem from "./AlunoItem";

const AlunosList = (props) => {
    return(
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            { props.items.map((aluno) =>(
                <AlunoItem
                  key={aluno.id}
                  Id={aluno.id}
                  Nome={aluno.nome}
                  Cpf={aluno.cpf}
                  Email={aluno.email}
                />
            ))
            }
        </tbody>
        </table>
    )
}

export default AlunosList;