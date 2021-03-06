import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import SearchBook from "./components/pages/SearchBook";
import SearchBookResult from "./components/pages/SearchBookResult";
import BookInfo from "./components/pages/BookInfo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import Library from "./components/pages/Library";
import Match from "./components/pages/Match";
import UserInfo from "./components/pages/UserInfo";


export default function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post(
                "http://localhost:5000/users/tokenIsValid",
                null,
                { headers: { "x-auth-token": token } }
            );
            if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", {
                    headers: { "x-auth-token": token },
                });
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        };

        checkLoggedIn();
    }, []);

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/searchBook" component={SearchBook} />
                        <Route path="/searchBookResult" component={SearchBookResult} />
                        <Route path="/bookinfo" component={BookInfo} />
                        <Route path="/library" component={Library} />
                        <Route path="/match" component={Match} />
                        <Route path="/userinfo" component={UserInfo} />
                    </Switch>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    );
}