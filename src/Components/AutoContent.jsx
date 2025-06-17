import React from "react";
import "./AutoContent.css";
export function AutoContent({ image, title, paragraph, paragraph2 }) {

    const highlightText = (text) => {
        // Reemplazamos la palabra 'energía solar' con un span que aplica el estilo
        const regex = /energía solar/gi;
        return text.split(regex).map((part, index, array) => {
            return (
                <React.Fragment key={index}> {/* Añadir key aquí */}
                    {part}
                    {index < array.length - 1 && (
                        <span style={{ fontWeight: 'bold', color: '#3e5a80' }}>energía solar</span>
                    )}
                </React.Fragment>
            );
        });
    };

    return (
        <div className="auto-content-container">
            <div className="auto-content-image">
                <img src={image} alt="Dynamic Content" />
            </div>
            <div className="auto-content-text">
                {title && <h1>{title}</h1>}
                {paragraph && <p>{highlightText(paragraph)}</p>}
                {paragraph2 && <p>{highlightText(paragraph2)}</p>}
            </div>
        </div>
    );
}
