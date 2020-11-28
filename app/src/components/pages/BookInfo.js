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
            const info = { data, userData };
            setButton(<button onClick={removeBook} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">clear</i></button>)
            await Axios.post("http://localhost:5000/search/addBook", info);

        } catch (err) {
            console.log(err)
        }
    };

    const removeBook = async () => {
        try {
            const info = { data, userData };
            setButton(<button onClick={addBook} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>)
            await Axios.delete("http://localhost:5000/search/removeBook", { data: info });
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
                        setButton(<button onClick={removeBook} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">clear</i></button>)
                        a = 1;
                    } else if (a === 0) {
                        setButton(<button onClick={addBook} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>)
                    }
                })
            } else {
                setButton(<button onClick={addBook} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>)
            }

        }

        if (userData.user) {
            getMoodBook();
        }
        let a = 0;
    }, [userData, listBooks]);

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        {!industryIdentifiers ? (<img alt="Foto de portada" src={image} />) : (<img alt="Foto de portada" src={thumbnail} />)}
                        {button}
                    </div>
                    <div className="card-content">

                        <h6>{title}</h6>
                        <p>{authors}</p>
                        {!industryIdentifiers ? (<p>{ISBN}</p>) : (<p>{industryIdentifiers[1].identifier}</p>)}
                        <p>{language}</p>
                        <p>{pageCount}</p>
                        <p>{publisher}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}