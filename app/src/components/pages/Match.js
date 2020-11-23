import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import UserContext from "../../context/UserContext";
import Book from "./Book.js";
import User from "./User.js";

export default function Match() {
    const [matches, setMatches] = useState('');

    const { userData } = useContext(UserContext);

    // async function getMatches() {
    //     const resData = await Axios.get("http://localhost:5000/match", { params: userData.user });
    //     console.log(resData);
    //     setMatches(resData.data);
    // }

    // useEffect(() => {
    //     getMatches();
    // }, []);

    useEffect(() => {
        async function getMatches() {
            const resData = await Axios.get("http://localhost:5000/match", { params: userData.user });
            setMatches(resData.data);
        }
        getMatches();
    }, [userData.user]);

    return (
        <div>
            Match
            {matches ?
                (matches.map((a, index) => {
                    return <div key={index}>
                        <Book key={index} book={a[1]}></Book>
                        <User user={a[0]}></User>
                    </div>
                })) :
                (console.log('b'))
            }
        </div>
    )
}
