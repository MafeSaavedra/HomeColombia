import React from 'react';
import './CtnMain.css';
import { Link } from "react-router-dom";
import './CtnMainres.css';
import entradasun from '../img/CONDOMINIO.mp4';
import { Boton } from '../Components/Boton.jsx';
import logoImg2 from '../img/herocontent.png';
import imagenprimera from '../img/80.png';
import { Bento } from '../Components/Bento.jsx';
import WhatsappButton from '../Components/WhatsappButton';


export function CtMain({ logo = logoImg2 }) {
    return (
        <>
            <section className="Contenedor-First">
                {/* Primera fila: Hero */}
                <section className='hero'>
                    <div className="hero-section">
                        <div>
                            <WhatsappButton />
                        </div>
                        <div className="video-hero">
                            <video
                                src={entradasun}
                                autoPlay
                                loop
                                muted
                                id="video-herocontent"
                            ></video>
                        </div>
                    </div>

                    {/* Segunda fila: Bienvenida */}
                    <div className="welcome-section">
                        <section className="hero-content">
                            <div className="container-hero">
                                <img className="logohome" src={logo} alt="Logo" />
                                <h3>Donde la calidad y la innovación se unen</h3>
                            </div>
                        </section>
                    </div>

                </section>

                {/* segunda fila: Imagen grande */}
                <section className='segunda-fila'>
                    <div className="Img-filados">
                        <img src={imagenprimera} alt="Entrada" />
                    </div>

                    <div className="info-section">
                        <section className="filatres">
                            <h1>¿Estás buscando un lugar para construir tu hogar?</h1>
                            <h2 className="descripcionfilatres">
                                Lotes de libre construcción, desde 300 m², con alta valorización.
                            </h2>
                            <p className="consulta-asesor">
                                Consulta con uno de nuestros asesores inmobiliarios para agendar una cita.
                            </p>
                            <a
                                href="https://wa.me/573217503712"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Boton children="Agenda tu cita" />
                            </a>
                        </section>
                    </div></section>


                {/* Quinta fila: Última sección */}
                <section className='tercera-fila'>
                    <div className="Contenido-ultimafila">
                        <h1>Nuestro Proyecto Actual</h1>
                        <h2 className="parrafo-ultimafila">
                            En Home Country Colombia, la innovación y la belleza natural se unen
                            para crear un espacio que inspira y renueva.
                        </h2>
                        <p>¡Ven y descúbrelo por ti mismo!</p>
                        <Link to="/proyecto">
                            <Boton children="Conocer Proyecto" />
                        </Link>
                    </div>

                    {/* Componente Bento */}
                    <div className="bento-section">
                        <Bento />
                    </div>
                </section> </section>

        </>
    );
}
