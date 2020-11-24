import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [provincia, setProvincias] = useState();
    const [setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        console.log(e);

        try {
            const newUser = { email, password, passwordCheck, displayName, provincia };
            console.log(newUser);
            await Axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await Axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            console.log(loginRes);
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
            <div className="row ">
                <div class="col s12 center-align">
                    <h4>Regístrate</h4>
                </div>
            </div>
            <form onSubmit={submit}>
                <div className="row ">
                    <div class="col s12 ">

                        <input
                            className="input-field inline"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="register-email">Email</label>
                    </div>
                </div>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="register-password">Contraseña</label>
                    </div>
                </div>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            type="password"
                            onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                        <label htmlFor="register-password-again">Repetir contraseña</label>
                    </div>
                </div>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            type="text"
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <label htmlFor="register-display-name">Nombre de usuario</label>
                    </div>
                </div>

                <div className="row ">
                    <div class="col s12 ">
                        <input
                            list="provincias"
                            name="provincias"
                            onChange={(e) => setProvincias(e.target.value)}
                        />
                        <label>Provincias</label>
                        <datalist id="provincias">
                            <option value="Madrid" />
                            <option value="Barcelona" />
                        </datalist>
                    </div>
                </div>


                <input type="submit" value="Enviar" className="waves-effect waves-light btn-large light-blue" />
            </form>
        </div>
    );
}