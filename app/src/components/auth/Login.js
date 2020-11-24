
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
            console.log(err);
        }
    };
    return (
        <div>
            <div className="row ">
                <div class="col s12 center-align">
                    <h4>Inicio de sesion</h4>
                </div>
            </div>
            <form onSubmit={submit}>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="login-email">Email</label>
                    </div>
                </div>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="login-password">Contraseña</label>
                    </div>
                </div>

                <input type="submit" value="Log in" className="waves-effect waves-light btn-large light-blue" />
            </form>
        </div>
    );
}