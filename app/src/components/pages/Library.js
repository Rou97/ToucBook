import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Book from "./Book.js";
import BookMood from "./BookMood.js";

export default function Library() {
    const [res, setRes] = useState('');
    const location = useLocation();

    useEffect(() => {
        try {
            let id = {
                userID: location.state.data.id
            };
            async function fetchData() {
                const resData = await Axios.get("http://localhost:5000/library/", { params: id });
                setRes(resData);
            }
            fetchData();
            console.log('a')
        } catch (error) {
            console.error(error);
        }
    }, [location.state.data.id]);


    return (
        <div>
            Biblioteca

            {res.data ? (
                res.data.listOfBooks.map((book, index) => {
                    return <div key={index}>
                        <Book key={index} book={book}></Book>
                        {res.data.library.map((a, i) => {
                            if (a.bookID === book._id) {

                                if (a.bookMood) {
                                    return (
                                        <BookMood key={i} a={a}></BookMood>
                                    )
                                } else {
                                    return (
                                        <BookMood key={i} a={a}></BookMood>
                                    )
                                }
                            }
                        })}
                    </div>
                })

            ) : (<div>Sad</div>)}


        </div>
    )
}