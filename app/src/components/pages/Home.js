import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
    const { userData } = useContext(UserContext);
    console.log(userData);

    return (
        <div>
            {userData.user ? (
                <div>
                    <h1>Bienvenido {userData.user.displayName}</h1>
                    <p>Hola</p>
                    <Link to="/searchBook">Buscador de libros</Link>
                    {/* <Link to="/library" >Biblioteca</Link> */}
                    <Link to={{
                        pathname: '/library',
                        state: {
                            data: userData.user
                        }
                    }}>Biblioteca</Link>

                </div>
            ) : (
                    <div>
                        <h2>No has iniciado sesión</h2>
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                )}
        </div>
    );
}