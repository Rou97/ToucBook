import React from 'react';
import { useLocation } from "react-router-dom";

export default function BookInfo() {
    const location = useLocation();
    const { displayName, email } = location.state;

    return (
        <div>
            User: {displayName}
            Email:
            <a href={"mailto:" + email}>{email}</a>
        </div>
    )
}