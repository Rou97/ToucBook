import React, { useEffect, useContext } from 'react';
import UserContext from "../../context/UserContext";
import Axios from "axios";
import Book from "./Book.js";

export default function Library() {
    const { userData } = useContext(UserContext)
    let resData;
    console.log(resData);

    useEffect(async () => {
        try {
            const info = { userData };
            if (userData.user !== undefined) {
                let id = {
                    userID: userData.user.id
                };
                resData = await Axios.get("http://localhost:5000/library/", { params: id });
                console.log(resData);
            }
        } catch (error) {
            console.error(error);
        }
    });

    return (
        <div>
            Biblioteca
            {resData ? (<div>
                <h2>Hay libros :)</h2>
            </div>) :
                (<div>
                    <h2>No tienes libros en la biblioteca</h2>
                </div>)}

        </div>
    )
}
