import React from 'react';
import './CtnMain.css';
import entradasun from '../img/SunriseEntrada.jpg';
import Filatres from '../img/Filatres.png';
import { Boton } from '../Components/Boton.jsx';
import logoImg2 from '../img/Milogohome.png';
import { Bento } from '../Components/Bento.jsx';

export function CtMain({ logo = logoImg2 }) {
    return (
        <>
            <section className="Contenedor-First">
                <div className="Welcome-page">
                    <img src={entradasun} alt="Entrada" id="imagen-herocontent" />
                </div>
                <div className="Welcome-page">
                    <section className='hero-content'>
                        <div className='container-hero'>
                        </div>

                        <div className='container-hero'>
                            <img className="logohome" src={logo} alt="Logo" />
                            <h3>Donde la calidad y la innovación se unen</h3>

                            <Boton children="Contactanos" />
                        </div>
                    </section>
                </div >
                <div className="Welcome-page">
                    <div className='Img-filatres'>
                        <img src={Filatres} alt="Entrada" />
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
                    <div className='Contenido-ultimafila'> <h1>PROYECTO EN CONSTRUCCIÓN</h1>
                        <h3>En TorreSan, la innovación y la belleza natural se unen
                            para crear un espacio que inspira y renueva. </h3>
                        <h2>¡Ven y descubrelo por ti mismo!</h2>
                        <Boton children="Conocer Proyecto" /></div>

                </div>
                <div className="Welcome-page">
                    {/* Componente creado en la carpeta components */}
                    <Bento />
                </div>
            </section >
        </>
    );
}
