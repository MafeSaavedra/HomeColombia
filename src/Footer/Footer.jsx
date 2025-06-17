import React from 'react';
import "./Footer.css";
import logofooter from '../img/herocontent.png';
import logofacebook from '../img/lg-facebook.png';
import logolinkedin from '../img/lg-linkedin.png';
import loginstagram from '../img/lg-instagram.png';

export function Footer({ logof = logofooter }) {
    return (
        <div className='Section'>
            <section className="Footer">
                <div className="Ft-content1">
                    <img className="logof" src={logof} alt="Logo" />
                </div>
                <div className="Ft-content2">
                    <div className='info-contacto-foot'>
                        <h1>Contacto</h1>
                        <ul>
                            <li>📱 (+57) 321 7503712</li>  {/* Emoji de teléfono móvil */}
                            <li>✉️ Homecountrycolombiasas@gmail.com</li>
                        </ul>
                    </div>
                    <div className='info-contacto-foot'>
                        <h1>Ubicación</h1>
                        <ul>
                            <li>📍 Le 15#60,27 ED. SALOME Penthouse</li>
                            <li>  Cartagena, Colombia</li>
                        </ul>
                    </div>
                </div>
                <div className="Ft-content1">
                    <a href="https://www.facebook.com/share/x4fVVxN2PmzSXAoR/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <img className="logoface" src={logofacebook} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/home-country-colombia/" target="_blank" rel="noopener noreferrer">
                        <img className="logolinke" src={logolinkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/homecountrycolombiasas/" target="_blank" rel="noopener noreferrer">
                        <img className="logoinsta" src={loginstagram} alt="LinkedIn" />
                    </a>
                </div>
            </section>
        </div>
    );
}