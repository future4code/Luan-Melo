import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.icon } />
            <strong><p>{ props.tipo  }</p></strong>
            <p>{ props.informacao }</p>
        </div>
    )
}

export default CardPequeno;