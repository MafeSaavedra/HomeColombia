import './lotes.css';
import lotesvistasup from '../img/vistalotes.jpg';
import { Boton } from '../Components/Boton.jsx';

export function Lotes() {

    return (

        <section className='cuerpodelcontenido'>
            <div className='Contenido-principal'>
                <div className='titulolotes'>
                    LOTES DISPONIBLES
                </div>
                <div className='imagenlotes'>
                    <img className="lotesvistaup" src={lotesvistasup} alt="Logo" />
                </div>
                <div className='segundafilalotes' >
                    <div className='contenidolotesprimera_fila'>
                        <h1> Haz realidad el proyecto que siempre quisiste</h1>
                        <p className='parrafo_rowfirst'>

                            Más que un terreno, es el inicio de tu futuro.
                            Terrenos 100% legalizados, listos para construir .                     </p>
                        <Boton children="Habla con un asesor " className="botonenviar" type="submit" />

                    </div>


                </div>



            </div>
            <hr className="thin-line" />
            <div className='Contenido-secundario'><h1> Más de 156,000 m² de posibilidades para tu próximo proyecto. </h1></div>
            <hr className="thin-line" />
            <div className='Contenido-tercero'>3</div>
        </section>
    );


}