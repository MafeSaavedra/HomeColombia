import './aboutus.css';
import './responAbout.css';
import Introd from '../img/about.jpg';
import foto from '../img/foto.jpg';
import foto2 from '../img/foto2.jpg';
import WhatsappButton from '../Components/WhatsappButton';

export function Aboutus() {
    return (
        <section className='body_contenido_nosotros'>
            <div className='introductorio'>
                <img src={Introd} className='imageninicial' alt="Imagen sobre nosotros" />
                <WhatsappButton />
            </div>
            <div className='divcentral'>
                <div className='organizacion'>

                    <div className='texto_sobre_empresa'>
                        <p>                         Home Country Colombia es una empresa constructora inmobiliaria fundada en 2024 y
                            ubicada en la ciudad de Cartagena, Colombia. Nuestro talento humano está calificado en el sector inmobiliario
                            para brindar el mejor acompañamiento en su decisión . Nos especializamos en el desarrollo de proyectos
                            residenciales y comerciales de alta calidad. Nuestro compromiso es ofrecer a nuestros clientes soluciones
                            que brinden el máximo confort, seguridad y sostenibilidad, con un enfoque innovador.

                        </p>
                    </div>

                    <div className='imagen'>
                        <img src={foto} className='fotpersona' alt="Imagen sobre nosotros" />


                    </div>

                </div>


            </div >
            <div className='elegirnos'>
                <div className='organizacionfilatres'>
                    <div className='foto'>
                        <img src={foto2} className='fotpersonacontruye' alt="Imagen sobre nosotros" />
                    </div>
                    <div className='porque_elergirnos'>
                        <h1>¿Por Qué Elegirnos?</h1>
                        <h3>Innovación y Calidad</h3>
                        <p>Como una empresa recién establecida, nos distinguimos por aplicar las últimas tecnologías en cada etapa del proceso de construcción, asegurando acabados de la más alta calidad y soluciones innovadoras que superan las expectativas de nuestros clientes.</p>

                        <h3>Compromiso con el Cliente</h3>
                        <p>Su satisfacción es nuestra mayor prioridad. Nos dedicamos a entender las necesidades y trabajar de la mano del cliente, para asegurar que cada proyecto no solo cumpla, sino que supere su expectativa</p>

                        <h3>Sostenibilidad</h3>
                        <p>Integramos tecnologías de energía sostenible en todos nuestros proyectos, utilizando soluciones innovadoras para minimizar el impacto ambiental y promover un futuro más verde.</p>

                    </div>
                </div>

            </div>
            <div className='mision_vision'>
                {/* Aquí también puedes agregar más contenido en el futuro */}

                <div className='mision'>
                    <h2>Misión</h2>
                    <p>
                        Crear espacios que integren de manera óptima diseño, funcionalidad y
                        respeto por el medio ambiente, implementando tecnologías de energía
                        sostenible en cada proyecto.Trabajamos con un firme compromiso hacia
                        la excelencia, la seguridad y la plena satisfacción del cliente a lo largo de todo el proceso de desarrollo.
                    </p>
                </div>
                <div className='vision'>
                    <h2>Visión</h2>
                    <p>
                        Ser reconocidos como la empresa líder en el sector de la construcción inmobiliaria en Colombia, distinguiéndonos
                        por nuestro compromiso con la innovación y proyectandonos como una empresa sólida, confiable y con un equipo altamente capacitado, comprometido
                        el bienestar social a largo plazo.
                    </p>
                </div>

            </div>



        </section >
    );
}
