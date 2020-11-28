import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
    const { userData, setUserData } = useContext(UserContext);

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <div>
            {userData.user ? (
                <div>
                    <div className="row ">
                        <h1 className="center-align">Bienvenido {userData.user.displayName}</h1>
                    </div>

                    <div className="row ">

                        <div className="col s6 center-align">
                            <Link to="/searchBook" className="waves-effect waves-light btn-large light-blue">Buscador de libros</Link>
                        </div>

                        <div className="col s6 center-align">
                            <Link to={{
                                pathname: '/library',
                                state: {
                                    data: userData.user
                                }
                            }}
                                className="waves-effect waves-light btn-large light-blue"
                            >Biblioteca</Link>
                        </div>

                    </div>

                    <div className="row ">
                        <div className="col s6 center-align">
                            <Link to="/match" className="waves-effect waves-light btn-large light-blue">Match</Link>
                        </div>
                        <div className="col s6 center-align">
                            <button onClick={logout} className="waves-effect waves-light btn-large light-blue flow-text">Salir</button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div>
                        <div className="row ">
                            <h1 className="center-align">Bienvenido a ToucBook</h1>
                        </div>
                        <div className="row">
                            <div className="col s6 center-align">
                                <Link className="waves-effect waves-light btn-large light-blue" to="/login" >Iniciar sesión</Link>
                            </div>
                            <div className="col s6 center-align">
                                <Link className="waves-effect waves-light btn-large light-blue" to="/register" >Registrarse</Link>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}