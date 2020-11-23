import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";
<<<<<<< HEAD
=======
import BookInfoButtons from "./BookMood.js";
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126

export default function BookInfo() {
    const location = useLocation();
    const { userData } = useContext(UserContext);
    const [listBooks, setListBooks] = useState();
    const [button, setButton] = useState();
<<<<<<< HEAD
=======
    const [buttonName, setButtonName] = useState();
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126

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
<<<<<<< HEAD
            setButton(<button onClick={removeBook}>Eliminar de la biblioteca</button>)
            const resData = await Axios.post("http://localhost:5000/search/addBook", info);

=======
            setButtonName("Eliminar de la biblioteca")
            setButton(<button onClick={removeBook}>{"a " + buttonName}</button>)
            const resData = await Axios.post("http://localhost:5000/search/addBook", info);
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
        } catch (err) {
            console.log(err)
        }
    };

    const removeBook = async () => {
        try {
            console.log('removebook');
            const info = { data, userData };
<<<<<<< HEAD
            setButton(<button onClick={addBook}>Añadir a la biblioteca</button>);
            const resData = await Axios.delete("http://localhost:5000/search/removeBook", { data: info });
=======
            console.log(info)
            setButtonName("Añadir a la biblioteca")
            setButton(<button onClick={addBook}>{"b " + buttonName}</button>);
            const resData = await Axios.delete("http://localhost:5000/search/removeBook", { data: info });

>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        async function getMoodBook() {
            let id = {
                userID: userData.user.id
            };
<<<<<<< HEAD

=======
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
            const resMoodBook = await Axios.get("http://localhost:5000/library", { params: id });
            if (!listBooks) {
                setListBooks(resMoodBook);
            }

<<<<<<< HEAD
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
=======

            if (listBooks && button === undefined) {
                listBooks.data.listOfBooks.forEach(element => {
                    if (element.title === title) {
                        setButtonName("Eliminar de la biblioteca");
                        setButton(<button onClick={removeBook}>{"a " + buttonName}</button>)
                    } else {
                        setButtonName("Añadir a la biblioteca");
                        setButton(<button onClick={addBook}>{"b " + buttonName}</button>);
                    }
                })
            } else {
                setButtonName("Añadir a la biblioteca");
                setButton(<button onClick={addBook}>{"b " + buttonName}</button>);
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
            }

        }

        if (userData.user) {
            getMoodBook();
        }
<<<<<<< HEAD
        let a = 0;
=======
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
    }, [userData, listBooks]);

    return (
        <div>
<<<<<<< HEAD
=======
            {buttonName}
>>>>>>> c206ea0d624ab421ffa5a9876190070e0747b126
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