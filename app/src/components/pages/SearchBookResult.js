import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Book from "./Book.js";

export default function SearchBookResult() {

    const location = useLocation();

    useEffect(() => {
        console.log('a');
        console.log(location.state);
    }, [location]);




    return (
        <div>
            <h1>Resultado de la busqueda de libros</h1>
            {location.state.map((book, index) => (
                <Book key={index} book={book}></Book>
            ))}
        </div>
    )
}
