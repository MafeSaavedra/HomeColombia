import React from 'react';
import './CtnMain.css';
import entradasun from '../img/CONDOMINIO.mp4'
import imgGrande from '../img/imagengrande.png';
import { Boton } from '../Components/Boton.jsx';
import logoImg2 from '../img/herocontent.png';
import { Bento } from '../Components/Bento.jsx';
import WhatsappButton from '../Components/WhatsappButton';


export function CtMain({ logo = logoImg2 }) {
    return (
        <>
            <section className="Contenedor-First">
                <div className="Welcome-page">
                    <div>
                        <WhatsappButton />
                    </div>
                    <video src={entradasun}
                        autoPlay
                        loop
                        muted
                        id="video-herocontent">
                    </video>

                </div>
                <div className="Welcome-page">
                    <section className='hero-content'>
                        <div className='container-hero'>
                        </div>

                        <div className='container-hero'>
                            <img className="logohome" src={logo} alt="Logo" />
                            <h3>Donde la calidad y la innovación se unen</h3>


                        </div>
                    </section>
                </div >
                <div className="Welcome-page">
                    <div className='Img-filatres'>
                        <img src={imgGrande} alt="Entrada" />
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
