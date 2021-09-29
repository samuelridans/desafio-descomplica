import "./AlunosFilter.css";

const AlunosFilter = (props) => {
  
  const inputChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }
    return(
        <div className="Search">
           <input type="text" placeholder="Buscar Alunos" onChange={inputChangeHandler} />
         </div>
    )
}

export default AlunosFilter;