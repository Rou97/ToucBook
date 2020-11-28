import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Book from "./Book.js";
import BookMood from "./BookMood.js";

export default function Library() {
    const [res, setRes] = useState('');
    const location = useLocation();
    const { isOtherUser } = location.state.data;

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
        } catch (error) {
            console.error(error);
        }
    }, [location.state.data.id]);


    return (
        <div>
            <h3>Biblioteca</h3>

            {res.data ? (
                res.data.listOfBooks.map((book, index) => {
                    return <div key={index}>
                        {res.data.library.map((a, i) => {
                            if (a.bookID === book._id && isOtherUser !== true) {

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
                        <Book key={index} book={book}></Book>
                    </div>
                })

            ) : (<div>
                <h3>No hay libros en tu biblioteca</h3>
            </div>)}


        </div>
    )
}