import React from 'react';
import { useHistory } from "react-router-dom";


export default function User(props) {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        history.push({
            pathname: '/userinfo',
            state: props.user
        });
    }

    return (
        <div>
            <h3 onClick={handleClick}>Propietario: {props.user.displayName}</h3>
        </div>
    )
}