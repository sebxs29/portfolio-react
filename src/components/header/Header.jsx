import './Header.css'
import Main from '../main/Main'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
        <nav className="navbar__container">
            <p className="navbar__logo">SEBXS29</p>
            <ul className="navbar__menu">
                <li><a href="#navbar">Inicio</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#project">Proyectos</a></li>
                <li><a href="#expert">Experticia</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><Link to ="/login">Ingresar</Link></li>
                <li><Link to ="/register">Registrarse</Link></li>
            </ul>
        </nav>
        <Main/>
    </header>
  )
}

export default Header