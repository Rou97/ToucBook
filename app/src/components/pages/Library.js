import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Book from "./Book.js";

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
        } catch (error) {
            console.error(error);
        }
    }, [location.state.data.id]);


    async function changeMood(x) {
        console.log(x);
        const a = await Axios.post("http://localhost:5000/library/changemood", x);
    }


    return (
        <div>
            Biblioteca



            {res.data ? (
                res.data.listOfBooks.map((book, index) => {
                    return <div>
                        <Book key={index} book={book}></Book>
                        {res.data.library.map((a, i) => {
                            if (a.bookID === book._id) {
                                if (a.bookMood) {
                                    return (<div key={i}>
                                        <h3>Lo tengo</h3>
                                        <button onClick={() => changeMood(a)}>Cambiar a lo quiero</button>
                                    </div>)
                                } else {
                                    return (<div key={i}>
                                        <h3>Lo quiero</h3>
                                        <button onClick={() => changeMood(a)}>Cambiar a lo tengo</button>
                                    </div>)
                                }
                            }
                        })}
                    </div>
                })

            ) : (<div>Sad</div>)}


        </div>
    )
}