import React from 'react';
import './sunrise.css'; // Asegúrate de que esta ruta sea correcta
import lotesvistasup from '../img/vistalotes.jpg';
import { Boton } from '../Components/Boton.jsx';
import WhatsappButton from '../Components/WhatsappButton';
import Plano from '../img/Plano.png';
import { AutoContent } from "../Components/AutoContent";
import logosunrise from '../img/sunrise.png';
import iconouno from '../img/icono-uno.png';
import iconodos from '../img/icono-dos.png';
import iconotres from '../img/icono-tres.png';
import imagendefaul from '../img/defaul.png';
import { ContentConMapa } from "../Components/ContentConMapa.jsx";


import { BotonConImagen } from '../Components/BotonConImagen';

export function Sunrise() {
    // Función para manejar el scroll hacia la sección
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        }
    };

    return (
        <>
            {/* Primer componente AutoContent */}
            <section className='primerafila-sunrise'>
                <div className="titulo-Pfila">
                    <h1> SUNRISE STATES</h1>
                </div>
                <AutoContent
                    image={logosunrise}
                    title=" PIONERO EN ENERGIAS LIMPIAS"
                    paragraph="Todos nuestros lotes contarán con energía solar, lo que generará importantes beneficios ambientales y económicos en una de las zonas con las tarifas de energía más altas."
                    paragraph2=""
                />
            </section>

            <div className='contenedor-botones'>
                <button onClick={() => scrollToSection('lotes')} className="boton-con-imagen">
                    <BotonConImagen imagen={iconouno} titulo="TERRENO" />
                </button>
                <button onClick={() => scrollToSection('ubicacion')} className="boton-con-imagen">
                    <BotonConImagen imagen={iconodos} titulo="UBICACIÓN" />
                </button>

                <BotonConImagen imagen={iconotres} titulo="AVANCES" />
            </div>
            <hr className="thin-lineuno" />

            {/* Sección con el ID donde quieres hacer el scroll */}
            <section className="cuerpo-del-contenido" >
                <div className="contenido-principal" id="lotes">
                    <div className="titulo-lotes">
                        <h1> LOTES DEL PROYECTO</h1></div>
                    <div className="imagen-lotes">
                        <img className="lotes-vista-up" src={lotesvistasup} alt="Planos" />
                    </div>
                    <div className="segunda-fila-lotes">
                        <div className="contenido-lotes-primera-fila">
                            <h1>Haz realidad el proyecto que siempre quisiste</h1>
                            <p className="parrafo-row-first">
                                Más que un terreno, es el inicio de tu futuro. Terrenos 100% legalizados, listos para construir.
                            </p>
                            <Boton children="Habla con un asesor" className="boton-enviar" type="submit" />
                            <WhatsappButton />
                        </div>
                    </div>
                </div>
                <hr className="thin-line" />
                <div className="contenido-secundario">
                    <h1>Más de 156,000 m² de posibilidades para tu próximo proyecto.</h1>
                </div>
                <hr className="thin-line" />
                <div className="contenido-tercero">
                    <div className="contenido-tercer-fila">
                        <h1>Nuestros Lotes</h1>
                        <p>
                            Cuentan con todos los <span className="resaltado">permisos y licencias</span> necesarios para que construyas con tranquilidad.
                        </p>
                        <p>
                            Lotes amplios desde 300m² hasta 1,200m² con <span className="resaltado">escrituras públicas</span> listas para el trámite.
                        </p>
                        <p>
                            <span className="resaltado">Sunrise Estates </span>un proyecto que se desarrolla en una zona  <span className="resaltado">sin riesgo de inundación  </span> y sin ningún tipo de restricción ambiental.
                        </p>
                    </div>
                    <div className="div-planos">
                        <img className="planos" src={Plano} alt="Plano" />
                    </div>
                </div>
                <hr className="thin-line" />
                <div className="contenido-secundario">
                    <h1 >
                        Lotes disponibles desde 66 millones de pesos ($15,286 USD) <br />
                        <span style={{ color: '#b96e2b', fontWeight: 'bold' }}>Precio de Preventa</span>
                    </h1>
                </div>
                <hr className="thin-line" />
            </section>

            {/* Segundo componente AutoContent */}
            <section id='ubicacion'>
                <div className="titulo-Ubi">
                    <h1> UBICACIÓN DEL PROYECTO </h1>
                </div>
                {/* <AutoContent
                    image={imagendefaul}
                    title="Nuestra Ubicacion"
                    paragraph="Este es un proyecto en el que disfrutarás de un entorno exclusivo y natural, 
                    localizado en una de las zonas turísticas más importantes de Colombia en el Departamento de Bolívar, 
                    a 20 minutos de Barú y 10 de Gambote (municipio de Arjona), 
                    por la variante que comunica dicho corregimiento con Mamonal y a 900 metros de dicha variante,
                     por la entrada al Campamento Adventista del Séptimo Arte."
                /> */}

                <ContentConMapa
                    mapUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.9115940056618!2d-75.36915202496635!3d10.187834689927376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDExJzE2LjIiTiA3NcKwMjEnNTkuNyJX!5e0!3m2!1ses!2sco!4v1734619557834!5m2!1ses!2sco
"
                    title="Sunrise Estates"
                    paragraph="Es un proyecto en el que disfrutarás de un entorno exclusivo y natural, 
                    localizado en una de las zonas turísticas más importantes de Colombia en el Departamento de Bolívar, 
                    a 20 minutos de Barú y 10 de Gambote (municipio de Arjona), 
                    por la variante que comunica dicho corregimiento con Mamonal y a 900 metros de dicha variante,
                     por la entrada al Campamento Adventista del Séptimo Arte."
                />
            </section>

        </>
    );
}

export default Sunrise;
