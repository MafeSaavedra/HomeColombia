import React from 'react';
import './CtnMain.css';
import './CtnMainres.css';
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
                        <h1>¿Estás buscando un lugar para construir tu hogar?</h1>
                        <h2 className='descripcionfilatres'> Lotes campestres con una alta tasa de valorización. Desde 300 m² en adelante. </h2>
                        <p className='consulta-asesor'>Consulta con uno de nuestros asesores inmobiliarios para agendar una cita.</p>

                        <Boton children="Agenda tu cita" />
                    </section>
                </div>
                <div className="Welcome-page">
                    <div className='Contenido-ultimafila'> <h1>PROYECTO EN  MARCHA</h1>
                        <h3 className='parrafo-ultimafila'>En Home Country Colombia, la innovación y la belleza natural se unen
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
