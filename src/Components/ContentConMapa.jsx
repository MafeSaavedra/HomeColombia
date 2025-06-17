import React from "react";
import "./ContentConMapa.css";

export function ContentConMapa({ mapUrl, title, paragraph, paragraph2 }) {
    return (
        <div className="content-con-mapa-container">
            <div className="map-section">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className="text-section">
                {title && <h1>{title}</h1>}
                {paragraph && <p>{paragraph}</p>}
                {paragraph2 && <p>{paragraph2}</p>}
            </div>
        </div>
    );
}
