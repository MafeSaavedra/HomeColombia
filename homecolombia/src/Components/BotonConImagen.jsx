import React from 'react';
import PropTypes from 'prop-types';
import './BotonConImagen.css'; // Asegúrate de crear un archivo de estilos CSS

// Componente Botón con imagen
export function BotonConImagen({ imagen, titulo }) {
    return (
        <div className="boton-con-imagen">
            <div className="imagen-container">
                <img src={imagen} alt="Botón con imagen" className="imagen-boton" />
            </div>
            <div className="titulo-container">
                <span className="titulo-boton">{titulo}</span>
            </div>
        </div>
    );
}

// PropTypes para validar las propiedades
BotonConImagen.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
};

