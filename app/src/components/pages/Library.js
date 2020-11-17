import React, { useEffect, useContext } from 'react';
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Library() {
    const { userData } = useContext(UserContext);

    // if (userData.user !== undefined) {
    //     let { id } = userData.user;
    //     console.log(id);
    // }

    useEffect(async () => {
        try {
            console.log('hola');
            const info = { userData };
            if (userData.user !== undefined) {
                let id = {
                    userID: userData.user.id
                };
                console.log(id);
                const resData = await Axios.get("http://localhost:5000/library/", { params: id });
            }
        } catch (error) {
            console.error(error);
        }
    });




    // try {
    //     console.log(userData.user);
    //     const resData = await Axios.get("http://localhost:5000/library/");
    //     console.log(resData);
    //     const resData = await Axios.get("http://localhost:5000/library/", { params: info });
    //     console.log(resData);
    //     const arrBooks = resData.data;
    //     console.log(arrBooks);
    //     //history.push("/searchBookResult");
    //     history.push({
    //         pathname: '/searchBookResult',
    //         state: arrBooks
    //     });
    // } catch (err) {
    //     console.log(err)
    // }

    return (
        <div>
            Biblioteca
        </div>
    )
}
