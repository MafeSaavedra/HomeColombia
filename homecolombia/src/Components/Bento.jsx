import React, { useEffect, useRef } from 'react';
import '../Components/Bento.css';
import imgGrande from '../img/imagengrande.png';
import imgPeq from '../img/imagenpequena.png';
import imgMed from '../img/imagenmediana.png';

export function Bento() {
    const imageContainers = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            {
                threshold: 0.3, // Se activa cuando el 30% del elemento es visible
            }
        );

        imageContainers.current.forEach((container) => {
            if (container) observer.observe(container);
        });

        return () => {
            imageContainers.current.forEach((container) => {
                if (container) observer.unobserve(container);
            });
        };
    }, []);

    return (
        <div className="bento-grid">
            <div
                className="image-container image-grande"
                ref={(el) => (imageContainers.current[0] = el)}
            >
                <img src={imgGrande} className="image1" alt="Imagen grande" />
            </div>
            <div
                className="image-container image-pequena"
                ref={(el) => (imageContainers.current[1] = el)}
            >
                <img src={imgPeq} className="image2" alt="Imagen pequeña" />
            </div>
            <div
                className="image-container image-media"
                ref={(el) => (imageContainers.current[2] = el)}
            >
                <img src={imgMed} className="image3" alt="Imagen media" />
            </div>
        </div>
    );
}
