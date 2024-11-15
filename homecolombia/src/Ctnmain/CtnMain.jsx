import React from 'react';
import './CtnMain.css';
import entradasun from '../img/SunriseEntrada.jpg';
import Filatres from '../img/Filatres.png';
import { Boton } from '../Components/Boton.jsx';
import logoImg2 from '../img/Milogohome.png';

export function CtMain({ logo = logoImg2 }) {
    return (
        <>
            <section className="Contenedor-First">
                <div className="Welcome-page">
                    <img className='entradasun' src={entradasun} alt="Entrada" />
                </div>
                <div className="Welcome-page">
                    <section className='hero-content'>
                        <div className='container-hero'>
                        </div>

                        <div className='container-hero'>
                            <img className="logohome" src={logo} alt="Logo" />
                            <h3>Donde la calidad y la innovación se unen</h3>

                            <Boton children="Contacta a Nuestro Equipo" />
                        </div>
                    </section>
                </div >
                <div className="Welcome-page">
                    <div className='Img-filatres'>
                        <img className='entradasun' src={Filatres} alt="Entrada" />
                    </div>
                </div>
                <div className="Welcome-page" >
                    <section className='filatres'>
                        <h1>¿Estás buscando un lugar para construir tu hogar o negocio?</h1>
                        <h2> Invierte en tu futuro, compra un terreno y haz realidad tus sueños.</h2>
                        <Boton children="Comprar Terreno" />
                    </section>
                </div>
                <div className="Welcome-page">
                    <h1>PROYECTO EN CONSTRUCCIÓN</h1>
                </div>
                <div className="Welcome-page">
                    <h1>Podría ir una imagen aquí</h1>
                </div>
            </section >
        </>
    );
}
