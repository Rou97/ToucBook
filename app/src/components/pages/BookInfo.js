import React, { useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";

export default function BookInfo() {
    const location = useLocation();
    const { userData } = useContext(UserContext);

    useEffect(() => {
        console.log('a');

    });

    const addBook = async () => {
        try {
            console.log('addbook');
            const info = { data, userData };
            const resData = await Axios.post("http://localhost:5000/search/addBook", info);
            console.log(resData);
        } catch (err) {
            console.log(err)
        }
    };

    const removeBook = async () => {
        try {
            console.log('removebook');
            console.log(data)
            const info = { data, userData };
            console.log(info)
            const resData = await Axios.delete("http://localhost:5000/search/removeBook", { data: info });
            // console.log(resData);
        } catch (err) {
            console.log(err)
        }
    };

    const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = location.state;
    let ISBN, image;
    if (!industryIdentifiers) {
        ISBN = location.state.ISBN
        image = location.state.image
    }
    console.log(ISBN);

    const data = { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher };
    console.log(image);
    return (
        <div>
            <button onClick={addBook}>Añadir a biblioteca</button>
            <button onClick={removeBook}>Eliminar de la biblioteca</button>
            <h1>{title}</h1>
            <h1>{authors}</h1>
            {!industryIdentifiers ? (<h1>{ISBN}</h1>) : (<h1>{industryIdentifiers[1].identifier}</h1>)}
            <h1>{language}</h1>
            <h1>{pageCount}</h1>
            <h1>{publisher}</h1>
            {!industryIdentifiers ? (<img alt="Foto de portada" src={image} />) : (<img alt="Foto de portada" src={thumbnail} />)}
            <h1>{description}</h1>
        </div>
    )
}