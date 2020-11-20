import React from 'react';
import { useHistory } from "react-router-dom";


export default function Book(props) {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        history.push({
            pathname: '/bookinfo',
            state: props.book
        });
    }

    return (
        <div>
            <h1 onClick={handleClick}>{props.book.title}</h1>
        </div>
    )
}
