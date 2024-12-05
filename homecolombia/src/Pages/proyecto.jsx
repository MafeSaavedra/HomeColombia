import React, { useState, useEffect } from 'react';
import './proyecto.css';
import banner1 from '../img/1.png';
import banner2 from '../img/2.png';
import banner3 from '../img/3.png';
import { Boton } from '../Components/Boton.jsx';


export function Proyecto() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lista de imágenes para el banner
    const banners = [banner1, banner2, banner3];
    // Efecto para cambiar las imágenes cada 1.5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 1500); // Cambia la imagen cada 1.5 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <section>

            <div className="banner-container">
                <div className="banner" style={{ backgroundImage: `url(${banners[currentSlide]})` }}>
                    {/* Aquí podrías agregar más contenido si lo necesitas */}
                </div>
            </div>


            <div className="proyectos-section">
                <h2 className="proyectos-title">CONOCE NUESTROS PROYECTOS</h2>

                <div className="proyecto-grid">
                    {/* Proyecto 1 */}
                    <div className="proyecto-item">
                        <div className="proyecto-description">
                            <h3 className="proyecto-name">Sunrise</h3>
                            <p className="proyecto-text">
                                Situado en el sereno entorno de La Viga (ARJONA), y a solo 20 minutos de Cartagena,
                                “SUNRISE ESTATES” ofrece la escapada perfecta de la vida urbana sin sacrificar la conveniencia.
                                Disfruta de la tranquilidad del campo con la ventaja de tener la ciudad a tu alcance.
                            </p>

                            {/* Tipo de inmueble */}
                            <div className="proyecto-details">
                                <p><strong>Tipo de Inmueble:</strong> Apartamentos</p>
                                <p><strong>Ubicación:</strong> Cartagena, Colombia</p>
                                <p><strong>Precio:</strong> $150,000 USD</p>
                            </div>
                            <Boton children="Saber Más" />
                        </div>
                        <div className="proyecto-image">
                            <img src="https://via.placeholder.com/400x300?text=Proyecto" alt="Proyecto" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
