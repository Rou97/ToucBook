import React, { useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";

export default function BookInfo() {
    const location = useLocation();
    const { userData } = useContext(UserContext);

    useEffect(() => {
        console.log('a');
        console.log(location.state);
    }, [location]);

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

    const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = location.state;
    const data = { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher };
    return (
        <div>
            <button onClick={addBook}>Añadir a biblioteca</button>
            <h1>{title}</h1>
            <h1>{authors}</h1>
            <h1>{industryIdentifiers[0].identifier}</h1>
            <h1>{industryIdentifiers[1].identifier}</h1>
            <h1>{language}</h1>
            <h1>{pageCount}</h1>
            <h1>{publisher}</h1>
            <img alt="Foto de portada" src={thumbnail} />
            <h1>{description}</h1>
        </div>
    )
}
