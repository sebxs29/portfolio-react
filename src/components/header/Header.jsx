import './Header.css'
import Main from '../main/Main'

const Header = () => {
  return (
    <header>
        <nav className="navbar__container">
            <p className="navbar__logo">SEBXS29</p>
            <ul className="navbar__menu">
                <li><a href="#navbar">Inicio</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#portfolio">Proyectos</a></li>
                <li><a href="#expert">Experticia</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        <Main/>
    </header>
  )
}

export default Header