import "./NaoEncontrado.css";
import naoEncontrado from '../../../Assets/not-found.png';

const  NaoEncontrado = () => {
    return (
        <div>
            <img width="200" src={naoEncontrado} alt="Aluno não encontrado"/>
            <h2>Oops.. Nenhum aluno encontrado</h2>
        </div>
    )
}

export default NaoEncontrado