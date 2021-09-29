
import React, {useState} from 'react';
import "./Alunos.css";
import Card from "../Components/Shared/UI/Card"; 
import AlunosFilter from "../Components/Alunos/AlunosFilter";
import AlunosList from "../Components/Alunos/AlunosList";
import {gql, useQuery} from "@apollo/client";
import NaoEncontrado from '../Components/Shared/UI/NaoEncontrado';


const GET_ALUNOS = gql`
            query {
              alunos {
                id,nome,cpf,email
               }
            }   
            `;
const Alunos = (props) => {

    const {loading, data } = useQuery(GET_ALUNOS);

    // Setando filtro
    const [filteredText, setFilteredText] = useState('');
    const filterChangeHandler = inputText => {setFilteredText(inputText)}; 
   
    if(loading) {return <Card className="Conteudo"> Carregando...</Card>;}
    else{   
        //Função filtra alunos
        const filteredAlunos = data.alunos.filter(aluno => {
            if(filteredText === ''){
                return aluno
            }
            else if(
                    aluno.cpf.toLowerCase().indexOf(filteredText.toLowerCase()) > -1 ||
                    aluno.nome.toLowerCase().indexOf(filteredText.toLowerCase()) > -1 ||
                    aluno.email.toLowerCase().indexOf(filteredText.toLowerCase()) > -1 
                )
                {
                    return aluno;
                }
        });

        return(
            <Card className="Conteudo"> 
                <AlunosFilter onChangeFilter={filterChangeHandler}></AlunosFilter>
                <AlunosList items={filteredAlunos}></AlunosList>
                {(() => {
                    if (filteredAlunos.length === 0){
                        return (
                            <NaoEncontrado></NaoEncontrado>
                        )
                    }
                })()}
            </Card>
        )
    }    
}

export default Alunos;