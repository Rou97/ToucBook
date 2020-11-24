import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
    const { userData } = useContext(UserContext);

    return (
        <div>
            {userData.user ? (
                <div>
                    <h1>Bienvenido {userData.user.displayName}</h1>
                    <p>Hola</p>
                    <Link to="/searchBook">Buscador de libros</Link>
                    <Link to={{
                        pathname: '/library',
                        state: {
                            data: userData.user
                        }
                    }}>Biblioteca</Link>
                    <Link to="/match" >Match</Link>
                    {/* cyan lighten-5 */}
                </div>
            ) : (
                    <div>
                        <div className="row ">
                            <h1 className="center-align">Bienvenido a ToucBook</h1>
                        </div>
                        <div className="row">
                            <div class="col s6 center-align">
                                <Link className="waves-effect waves-light btn-large light-blue" to="/login" >Iniciar sesion</Link>
                            </div>
                            <div class="col s6 center-align">
                                <Link className="waves-effect waves-light btn-large light-blue" to="/register" >Registrarse</Link>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}