import LinkNavbar from "../LinkNavbar"
import './index.css'
import logo from '../../images/logo.png'

const Index = () => {
    return(
        <nav className="Navbar">
            <img className="logo" src={logo} alt="" />
            <ul>
                <LinkNavbar text="Inicio" to="/"/>
                <LinkNavbar text="Favoritos" to="/favorites"/>
                <LinkNavbar text="Carrito" to="/carrito"/>
                <LinkNavbar text="Edicion de Productos" to="/editProducts"/>
                
            </ul>
        </nav>
    )
}

export default Index