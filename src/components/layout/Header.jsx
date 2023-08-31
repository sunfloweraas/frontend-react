import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Coffee & Mountain</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/Contato">Contato</NavLink></li>
                <li><NavLink to="/suco">Suco</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header