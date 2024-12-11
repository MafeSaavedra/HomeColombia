import './aboutus.css';
import Introd from '../img/about.jpg';
import foto from '../img/foto.png';
import foto2 from '../img/foto2.png';
export function Aboutus() {
    return (
        <section className='body_contenido_nosotros'>
            <div className='introductorio'>
                <img src={Introd} className='imagen' alt="Imagen sobre nosotros" />
            </div>
            <div className='divcentral'>
                <div className='organizacion'>
                    <div className='texto_sobre_empresa'>
                        Home Country Colombia es una destacada empresa constructora inmobiliaria ubicada en la hermosa ciudad de Cartagena, Colombia. Con más de 10 años de experiencia en el sector, nos especializamos en el desarrollo de proyectos residenciales
                        y comerciales de alta calidad, diseñados para ofrecer el mejor confort y seguridad a nuestros clientes
                    </div>
                    <div className='imagen'>
                        <img src={foto} className='fotpersona' alt="Imagen sobre nosotros" />


                    </div>

                </div>


            </div>
            <div className='elegirnos'>
                <div className='organizacionfilatres'>
                    <div className='foto'>
                        <img src={foto2} className='fotpersona' alt="Imagen sobre nosotros" />
                    </div>
                    <div className='porque_elergirnos'>
                        <h1>¿Por Qué Elegirnos? </h1>
                        <h3>Innovación y Calidad</h3>
                        <p>Nos destacamos por utilizar tecnología de punta en cada fase del proceso, garantizando acabados de la más alta calidad.</p>
                        <h3>Equipo Experto</h3>
                        <p>Contamos con un equipo de arquitectos e ingenieros con años de experiencia, comprometidos con tu proyecto.</p>
                        <h3>Compromiso con el Cliente</h3>
                        <p>Tu satisfacción es nuestra prioridad. Nos aseguramos de que cada proyecto cumpla con tus expectativas y más.</p>
                        <h3>Sostenibilidad</h3>
                        <p>Construimos de manera responsable con el medio ambiente, usando materiales ecológicos y prácticas sostenibles.</p>

                    </div>
                </div>

            </div>
            <div className='mision_vision'>
                {/* Aquí también puedes agregar más contenido en el futuro */}

                <div className='mision'>
                    <h2>Misión</h2>
                    <p>
                        En Home Country Colombia nos dedicamos a la construcción de proyectos inmobiliarios innovadores y sostenibles,
                        brindando soluciones habitacionales de calidad para mejorar la calidad de vida de nuestros clientes.
                        Nuestro compromiso es crear espacios que integren diseño, funcionalidad y respeto por el medio ambiente,
                        con un enfoque en la excelencia, seguridad y satisfacción en cada uno de nuestros proyectos.
                    </p>
                </div>
                <div className='vision'>
                    <h2>Visión</h2>
                    <p>
                        Ser la empresa líder en el sector de la construcción inmobiliaria en Colombia, reconocida por su compromiso con la innovación,
                        la sostenibilidad y la calidad en cada proyecto. Buscamos ser la opción preferida por nuestros clientes,
                        contribuyendo al desarrollo urbano responsable y creando comunidades que perduren en el tiempo.
                        Nos proyectamos como una empresa sólida, confiable y con un equipo altamente capacitado.
                    </p>
                </div>

            </div>



        </section>
    );
}
