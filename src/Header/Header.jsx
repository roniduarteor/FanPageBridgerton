import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <nav className='navBar'>
            <img src="https://i.pinimg.com/originals/f8/e8/09/f8e80904c3ee555e73a4c9e47dddb381.png" alt="" className="escudoImg"/>
            
            <span className='linha'></span>
            
            <Link to='/' className='link'>Home</Link>

            <Link to='about' className='link'>About</Link>

            <Link to='characters' className='link'>Characters</Link>
        </nav>
    )
}

export default Header