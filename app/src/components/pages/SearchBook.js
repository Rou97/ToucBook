import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function SearchBook() {
    const [data, setData] = useState();
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const info = { data };
            const resData = await Axios.post("http://localhost:5000/search/book", info);
            const arrBooks = resData.data;
            history.push({
                pathname: '/searchBookResult',
                state: arrBooks
            });
        } catch (err) {
            console.log(err)
        }
    };

    return (

        <div>
            <div className="row ">
                <h4>Buscador de libros</h4>
            </div>

            <form onSubmit={submit}>
                <div className="row ">
                    <div className="col s12">
                        <label>Book name</label>
                        <input
                            type="text"
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row ">
                    <div className="col s6">
                        <input className="waves-effect waves-light btn-large light-blue" type="submit" value="Buscar" />
                    </div>
                </div>
            </form>
        </div>



    )
}
