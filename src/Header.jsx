import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='sobre'>Sobre</Link>
            <span> | </span>
            <Link to='servicos'>Serviços</Link>
            <span> | </span>
            <Link to='contatos'>Contatos</Link>
        </nav>
    )
}

export default Header