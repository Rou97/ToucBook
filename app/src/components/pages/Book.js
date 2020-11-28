import React from 'react';
import { useHistory } from "react-router-dom";


export default function Book(props) {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        history.push({
            pathname: '/bookinfo',
            state: props.book
        });
    }

    return (
        <div onClick={handleClick} className="card">
            <div className="card-image">
                {props.book.image ?
                    (<img alt="Imagen de la portada del libro" src={props.book.image} />) :
                    (<img alt="Imagen de la portada del libro" src={props.book.thumbnail} />)}
            </div>
            <div className="card-content">
                <h6 className="card-title">{props.book.title}</h6>
                <p>{props.book.description}</p>
            </div>
        </div>

    )
}

