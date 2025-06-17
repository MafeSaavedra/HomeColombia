import './proyecto.css';
import { Link } from 'react-router-dom';

import { Boton } from '../Components/Boton.jsx';
import Sunriese from '../img/sunrise.png';
import Vsunrise from '../img/videosunrise.mp4'
import Vsunrise2 from '../img/videosunrise2.mp4'
import Entrada from '../img/entrada.png'
import WhatsappButton from '../Components/WhatsappButton';
export function Proyecto() {
    return (
        <section>


            <div className="banner-container">
                <div className="banner" >
                    <video src={Vsunrise2}
                        autoPlay
                        loop
                        muted
                        id="video-promosunrise">
                    </video>
                    <WhatsappButton />
                </div>
            </div>


            <div className="proyectos-section">
                <h2 className="proyectos-title">CONOCE NUESTROS PROYECTOS</h2>

                <div className="proyecto-grid">

                    <div className="proyecto-description-proyecto1">
                        <div className='div-logosunrise'> <img src={Sunriese} alt="Logosunrise" className='Logo-Sunrise' /></div>


                        <p className="proyectos-text">
                            Ubicado en el apacible entorno de La Viga, en Arjona, y a tan solo 20 minutos de Cartagena, <strong>Sunrise Estates </strong> ofrece la escapada perfecta del bullicio urbano sin renunciar a la comodidad. Disfruta de la serenidad del campo con la ventaja de tener la ciudad al alcance de tu mano..
                        </p>
                        <p className='tipoinmueble'><strong>Tipo de Inmueble:</strong></p>
                        <p>Propiedad Campestre</p>
                        <p className='ubicacion-in'><strong >Ubicación:</strong></p>

                        <p>Bolivar, Colombia</p>
                        <br></br>
                        <Link to="/sunrise" style={{ textDecoration: 'none' }}>
                            <Boton children="Saber Más" />
                        </Link>
                    </div>
                    <div className="proyecto-image">
                        <img src={Entrada} alt="Proyecto" />
                    </div>
                </div>
            </div>
        </section >
    );
}
