import React, { useEffect, useState, useRef } from 'react';
import './lotes.css';
import lotesvistasup from '../img/vistalotes.jpg';
import { Boton } from '../Components/Boton.jsx';
import WhatsappButton from '../Components/WhatsappButton';
import Plano from '../img/Plano.png';

export function Lotes() {
    const [isVisible, setIsVisible] = useState(false);
    const contenidoSecundarioRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Añade la clase 'show' cuando el elemento está en el viewport
                } else {
                    setIsVisible(false); // Remueve la clase 'show' cuando el elemento ya no está en el viewport
                }
            },
            { threshold: 0.1 } // Umbral del 10% para cuando se considera que el elemento está en vista
        );

        if (contenidoSecundarioRef.current) {
            observer.observe(contenidoSecundarioRef.current); // Observa el div
        }

        return () => {
            if (contenidoSecundarioRef.current) {
                observer.unobserve(contenidoSecundarioRef.current); // Deja de observar cuando el componente se desmonta
            }
        };
    }, []);

    return (
        <section className='cuerpodelcontenido'>
            <div className='Contenido-principal'>
                <div className='titulolotes'>LOTES DISPONIBLES</div>
                <div className='imagenlotes'>
                    <img className="lotesvistaup" src={lotesvistasup} alt="planos" />
                </div>
                <div className='segundafilalotes'>
                    <div className='contenidolotesprimera_fila'>
                        <h1> Haz realidad el proyecto que siempre quisiste</h1>
                        <p className='parrafo_rowfirst'>
                            Más que un terreno, es el inicio de tu futuro.
                            Terrenos 100% legalizados, listos para construir.
                        </p>
                        <Boton children="Habla con un asesor" className="botonenviar" type="submit" />
                        <WhatsappButton />
                    </div>
                </div>
            </div>
            <hr className="thin-line" />
            <div
                className='Contenidosecundario'
            >
                <h1>Más de 156,000 m² de posibilidades para tu próximo proyecto.</h1>
            </div>
            <hr className="thin-line" />
            <div className='Contenido-tercero'>
                <div className='contenido_tercerfila'>
                    <h1>Nuestros Lotes</h1>
                    <p>Cuentan con todos los permisos y licencias necesarios para que construyas con tranquilidad.</p>
                    <p>Lotes amplios desde 300m² hasta 1,000m² con escrituras listas para el trámite.</p>
                </div>
                <div className='div_planos'>
                    <img className="planos" src={Plano} alt="Plano" />
                </div>
            </div>
            <hr className="thin-line" />
            <div className={`Contenido-secundario ${isVisible ? 'show' : ''}`} // Aplica 'show' cuando el elemento esté visible
                ref={contenidoSecundarioRef}><h1>Lotes disponibles desde 66 millones de pesos</h1></div>
            <hr className="thin-line" />
        </section>
    );
}
