import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
//import Book from "./Book.js";

export default function Library() {
    const [res, setRes] = useState('');
    const location = useLocation();


    useEffect(async () => {
        try {

            let id = {
                userID: location.state.data.id
            };
            const resData = await Axios.get("http://localhost:5000/library/", { params: id });
            setRes(resData);
        } catch (error) {
            console.error(error);
        }
    });


    return (
        <div>
            Biblioteca

            {res.data ? (

                res.data.map((id, i) => {
                    return (<h2 key={i}>{id}</h2>)
                })

            ) : (<div>Sad</div>)}


        </div>
    )
}
