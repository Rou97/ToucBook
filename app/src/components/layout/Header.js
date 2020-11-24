import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
    return (
        <header>
            <Link to="/">
                <h5>ToucBook</h5>
            </Link>
            <AuthOptions />
        </header>
    );
}