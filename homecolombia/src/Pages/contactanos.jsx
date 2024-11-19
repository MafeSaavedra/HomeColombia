import './contactanos.css';
import { Boton } from '../Components/Boton.jsx';
import loglinkedin from '../img/linkedin.png';
import loginstagram from '../img/instagram.png';
import logfacebook from '../img/facebook.png';

export function Contactanos() {
    return (
        <section>
            <div className="contenido-contactados">
                <div className="titulo">
                    <h1>CONTÁCTENOS</h1>
                </div>

                <form action="https://formspree.io/f/mrbzwgpp" method="POST" id="formulario">
                    <div className="divContenidoFormulario">

                        <div className="texto">
                            <div className="textoTitulo">
                                <h1>¡Nos interesa tu opinión!</h1>
                            </div>
                            <div className="textoParrafo">
                                <h2>Si tienes alguna consulta, sugerencia o comentario sobre nuestros proyectos inmobiliarios, por favor completa el formulario a continuación. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo a la mayor brevedad posible.</h2>
                            </div>
                        </div>

                        <div className="formulario">
                            <div className="inputPequeños">
                                <div className="etiqueta">
                                    <label htmlFor="nombre">Nombre *</label>
                                </div>
                                <div className="entrada">
                                    <input type="text" id="nombre" name="name" placeholder="Escribe tu nombre" required />
                                </div>

                                <div className="etiqueta">
                                    <label htmlFor="email">Correo *</label>
                                </div>
                                <div className="entrada">
                                    <input type="email" id="email" name="email" placeholder="Escribe tu correo" required />
                                </div>

                                <div className="etiqueta">
                                    <label htmlFor="telefono">Teléfono *</label>
                                </div>
                                <div className="entrada">
                                    <input type="number" minLength="10" maxLength="10" id="telefono" name="telefono" placeholder="Escribe tu teléfono" required />
                                </div>

                                <div className="etiqueta">
                                    <label htmlFor="asunto">Asunto *</label>
                                </div>
                                <div className="entrada">
                                    <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto del mensaje" required />
                                </div>
                            </div>

                            <div className="inputContenido">
                                <div className="etiqueta">
                                    <label htmlFor="contenidoMsm">Contenido *</label>
                                </div>
                                <textarea id="contenidoMsm" name="contenidoMsm" placeholder="Escribe el contenido del mensaje" required></textarea>
                            </div>
                        </div>

                        <div className="contenedorBoton">
                            <p>Los campos marcados con (*) son obligatorios</p>
                            <Boton children="Enviar" className="botonenviar" type="submit" />


                        </div>

                    </div>
                </form>

                <div className="parrafoIntermedio">
                    <p>O si prefieres comunicarte a través de un medio alternativo, a continuación te proporcionamos nuestros datos de contacto principales</p>
                </div>
            </div>

            <div className='cinta-slogan'>
                <h2>Home Colombia innovación en marcha </h2>
            </div>

            <div className='divContenidoFormulario'>

                <div className="informacion">
                    <div className="datos">
                        <p className="ajusteParrafo">Ubicación: </p>
                        <p>Colombia, Medellín, Trinidad Carrera 65C Calle 25 -68</p>
                        <p className="ajusteParrafo">Teléfono: </p>
                        <p>555-55555</p>
                        <p className="ajusteParrafo">Correo: </p>
                        <p>softwaresinfoni@gmail.com</p>
                        <p className="ajusteParrafo">Horario: </p>
                        <p>Lunes a Domingo de 8:00 am a 2:00 pm</p>
                    </div>
                    <div className="ubicacion">
                        <iframe className="mapa"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.1413391990873!2d-75.58645609527545!3d6.227200389543579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429c80d129989%3A0x1110527907574dc6!2sCra.%2065C%20%2325-68%2C%20Guayabal%2C%20Medell%C3%ADn%2C%20Guayabal%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1726643132966!5m2!1ses-419!2sco"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>



            </div>
            <div className='redes-sociales-contactanos'>
                <div>
                    <img className="lg-linkedin" src={loglinkedin} alt="Logo" />
                </div>



                <div>
                    <img className="lg-instagram" src={loginstagram} alt="Logo" />
                </div>

                <div>
                    <img className="lg-facebook" src={logfacebook} alt="Logo" />
                </div>
            </div>

        </section>
    );
}
