import { Link } from "react-router-dom"

const MainMenu = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/">Ofertas</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu