import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function SearchBook() {
    const [data, setData] = useState();
    const { userData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const info = { data }
            const resData = await Axios.post("http://localhost:5000/search/book", info);
            const arrBooks = resData.data;
            console.log(arrBooks);
            //history.push("/searchBookResult");
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
            {userData.user ? (
                <div>
                    <form onSubmit={submit}>
                        <label>Book name</label>
                        <input
                            type="text"
                            onChange={(e) => setData(e.target.value)}
                        />

                        <input type="submit" value="Log in" />
                    </form>
                </div>
            ) : (
                    <div>
                        <h1>404</h1>
                    </div>
                )}
        </div>

    )
}
