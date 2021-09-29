import './Header.css'
import slogan from '../../../Assets/slogan.jpg';
import logo from '../../../Assets/logo-fundo-verde.jpg';

const Header = () => {
    return(
        <div className="App-header">
            <div className="Side-left"><img src={logo} className="logo" alt="Descomplica" width="200"/></div>
            <div className="Side-right"><img src={slogan} className="slogan" alt="Aprender é para todo mundo"  width="200"/></div>
      </div>
    )
}

export default Header;