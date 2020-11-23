import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
// import Axios from "axios";
// import UserContext from "../../context/UserContext";

export default function BookInfo() {
    const location = useLocation();
    //const { userData } = useContext(UserContext);

    useEffect(() => {
        console.log('a');
    });

    console.log('b');
    console.log(location.state);
    const { displayName, email } = location.state;

    return (
        <div>
            User: {displayName}
            Email: {email}
        </div>
    )
}