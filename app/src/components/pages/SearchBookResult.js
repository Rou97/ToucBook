import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function SearchBookResult() {

    const location = useLocation();

    useEffect(() => {
        console.log('a');
        console.log(location.state);
    }, [location]);




    return (
        <div>
            <h1>Resultado de la busqueda de libros</h1>
            <h3>{location.state[0].title}</h3>
        </div>
    )
}
