import { Link } from "react-router-dom"
// import Menu from './Menu.css'

const Menu = () => {
    return (
        <nav>
            <ul>
               <li><Link to="/">Inicio</Link></li>
               <li><Link to="/tareas">Gestion de Tareas</Link></li> 
               <li><Link to="/ListaPets">Nuestras Mascotas</Link></li> 
            </ul>
        </nav>
    )
}

export default Menu;