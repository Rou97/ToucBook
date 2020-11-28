import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Book from "./Book.js";

export default function SearchBookResult() {

    const location = useLocation();

    return (
        <div>
            <div className="row">
                <h4>Resultado de la busqueda de libros</h4>
            </div>
            {location.state.map((book, index) => (
                <div className="row" key={index}>
                    <div className="col s12 m6">
                        <Book key={index} book={book}></Book>
                    </div>
                </div>
            ))}
        </div>
    )
}
