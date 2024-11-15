import React from 'react';
import './Boton.css';

export function Boton({ children }) {
    return (
        <div>
            <button className="btn-comprar">{children}</button>
        </div>
    );
}