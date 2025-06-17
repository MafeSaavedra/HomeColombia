import React from 'react';
import buttonFloating from '../img/buttonfloating.png'; // Asegúrate de que la ruta sea correcta
import './WhatsappButton.css';
const WhatsappButton = () => {
    return (
        <div className="whatsapp-button">
            <a href="https://wa.me/573217503712" target="_blank" rel="noopener noreferrer">
                <img src={buttonFloating} alt="WhatsApp" id="botonflotante" />
            </a>
        </div>
    );
};

export default WhatsappButton;