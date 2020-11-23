import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";

export default function BookInfo() {
    const location = useLocation();
    const { userData } = useContext(UserContext);
    const [listBooks, setListBooks] = useState();
    const [button, setButton] = useState();

    const { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher } = location.state;
    let ISBN, image;
    if (!industryIdentifiers) {
        ISBN = location.state.ISBN
        image = location.state.image
    }
    const data = { title, authors, industryIdentifiers, language, thumbnail, description, pageCount, publisher };

    const addBook = async () => {
        try {
            console.log('addbook');
            const info = { data, userData };
            setButton(<button onClick={removeBook}>Eliminar de la biblioteca</button>)
            const resData = await Axios.post("http://localhost:5000/search/addBook", info);

        } catch (err) {
            console.log(err)
        }
    };

    const removeBook = async () => {
        try {
            console.log('removebook');
            const info = { data, userData };
            setButton(<button onClick={addBook}>Añadir a la biblioteca</button>);
            const resData = await Axios.delete("http://localhost:5000/search/removeBook", { data: info });
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        async function getMoodBook() {
            let id = {
                userID: userData.user.id
            };

            const resMoodBook = await Axios.get("http://localhost:5000/library", { params: id });
            if (!listBooks) {
                setListBooks(resMoodBook);
            }

            if (listBooks && button === undefined) {
                listBooks.data.listOfBooks.forEach(element => {
                    if (element.title === title && a === 0) {
                        setButton(<button onClick={removeBook}>Eliminar de la biblioteca</button>);
                        a = 1;
                    } else if (a === 0) {
                        setButton(<button onClick={addBook}>Añadir a la biblioteca</button>);
                    }
                })
            } else {
                setButton(<button onClick={addBook}>Añadir a la biblioteca</button>);
            }

        }

        if (userData.user) {
            getMoodBook();
        }
        let a = 0;
    }, [userData, listBooks]);

    return (
        <div>
            {button}
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