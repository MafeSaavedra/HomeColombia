
import { useState } from "react";
import './Navbar.css';
import logoImg from '../img/Milogohome.png';


export function Navbar({ logo = logoImg }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };

    return (
        <div className="Nav-back">
            <div className="ctn">

                <div className={`navbar-links ${isOpen ? "active" : ""}`} >
                    <div id="ctn-links">
                        <ul>
                            <li><a href="#home.jsx">Inicio</a></li>
                            <li><a href="#productos.jsx">Contáctanos</a></li>
                            <li><a href="#contact">Proyectos</a></li>
                        </ul>
                    </div>
                </div>


                <div className="ctn-logo" id="ctn-logo">
                    <img className="logohome" src={logo} alt="Logo" />
                </div>


                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>


                <div className={`navbar-links ${isOpen ? "active" : ""}`} >
                    <div id="ctn-links">
                        <ul>
                            <li><a href="#lotes">Lotes</a></li>
                            <li><a href="#ubicacion">Ubicación</a></li>
                            <li><a href="#acerca">Acerca de Nosotros</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
