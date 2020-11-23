import React from 'react';
import { useHistory } from "react-router-dom";


export default function User(props) {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        history.push({
            pathname: '/userinfo',
            state: props.user
        });
    }

    return (
        <div>
            <h1 onClick={handleClick}>{props.user.displayName}</h1>
        </div>
    )
}