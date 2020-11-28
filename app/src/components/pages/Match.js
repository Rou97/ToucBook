import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import UserContext from "../../context/UserContext";
import Book from "./Book.js";
import User from "./User.js";

export default function Match() {
    const [matches, setMatches] = useState('');
    const { userData } = useContext(UserContext);

    useEffect(() => {
        async function getMatches() {
            const resData = await Axios.get("http://localhost:5000/match", { params: userData.user });
            setMatches(resData.data);
        }
        getMatches();
    }, [userData.user]);

    return (
        <div>
            <h4>Match encontrados</h4>
            {matches ?
                (matches.map((a, index) => {
                    return <div key={index}>
                        <User user={a[0]}></User>
                        <Book key={index} book={a[1]}></Book>
                    </div>
                })) :
                (
                    <h3>No hay match con nadie</h3>
                )
            }
        </div>
    )
}