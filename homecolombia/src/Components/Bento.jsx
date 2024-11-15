import React from 'react';
import '../Components/Bento.css';
import imgGrande from '../img/imagengrande.png';
import imgPeq from '../img/imagenpequena.png';
import imgMed from '../img/imagenmediana.png';

export function Bento() {
    return (
        <div className="bento-grid">
            <div className="image-container image-grande">
                <img src={imgGrande} className="image" alt="Imagen grande" />
            </div>
            <div className="image-container image-pequena">
                <img src={imgPeq} className="image" alt="Imagen pequeña" />
            </div>
            <div className="image-container image-media">
                <img src={imgMed} className="image" alt="Imagen media" />
            </div>
        </div>
    );
}
