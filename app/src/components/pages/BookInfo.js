import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function BookInfo() {
    const location = useLocation();

    useEffect(() => {
        console.log('a');
        console.log(location.state);
    }, [location]);

    return (
        <div>
            <h1>{location.state.title}</h1>
        </div>
    )
}
