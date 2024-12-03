import { useState } from "react";
import './Navbar.css';
import logoImg from '../img/Navbar.png';
import { Link } from 'react-router-dom';


export function Navbar({ logo = logoImg }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };

    return (
        <div className="Nav-back">
            <div className="ctn">
                <div className={`navbar-links ${isOpen ? "active" : ""}`} >
                    <div id="ctn-links">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/contactanos">Contáctanos</Link></li>
                            <li><Link to="#contact">Proyectos</Link></li>
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
                            <li><Link to="#lotes">Lotes</Link></li>
                            <li><Link to="#ubicacion">Ubicación</Link></li>
                            <li><Link to="#acerca">Acerca de Nosotros</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
