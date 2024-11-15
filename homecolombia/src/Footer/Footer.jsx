import React from 'react';
import "./Footer.css";
import logofooter from '../img/logohome.svg';

export function Footer({ logof = logofooter }) {
    return (
        <div className='Section'>
            <section className="Footer">
                <div className="Ft-content1">
                    <img className="logof" src={logof} alt="Logo" />
                </div>
                <div className="Ft-content1">
                    <h1>Contacto</h1>
                    <ul>
                        <li>Ventas</li>
                        <li>Atención al cliente</li>
                    </ul>
                </div>
                <div className="Ft-content1">
                    <h1>Logos</h1>
                </div>
            </section>
        </div >

    );
}