import React, { useContext } from 'react';
import UserContext from "../../context/UserContext";

export default function Library() {
    const { userData } = useContext(UserContext);

    try {
        console.log(userData.user);
        // const resData = await Axios.get("http://localhost:5000/library/", { params: info });
        // console.log(resData);
        // const arrBooks = resData.data;
        // console.log(arrBooks);
        // //history.push("/searchBookResult");
        // history.push({
        //     pathname: '/searchBookResult',
        //     state: arrBooks
        // });
    } catch (err) {
        console.log(err)
    }

    return (
        <div>
            Biblioteca
        </div>
    )
}
