
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:5000/users/login",
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        <div>
            <h2>Inicio de sesion</h2>
            <form onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="login-password">Contraseña</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}