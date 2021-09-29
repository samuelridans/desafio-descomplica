import './AlunoItem.css';

const AlunoItem = (props) => {
    return( 
        <tr>
        <td>{props.Id}</td>
        <td>{props.Nome}</td>
        <td>{props.Cpf}</td>
        <td>{props.Email}</td>
      </tr>
      )
}

export default AlunoItem;