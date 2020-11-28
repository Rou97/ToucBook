import React from 'react';
import { useLocation, Link } from "react-router-dom";

export default function BookInfo() {
    const location = useLocation();
    const { _id, displayName, email } = location.state;
    const userData = {};
    userData.id = _id;

    return (

        <div>
            <div className="row">
                <div className="col">
                    <h3>User: {displayName}</h3>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>
                        Email:
                    <a href={"mailto:" + email}>{email}</a>

                    </h3>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>

                        <Link to={{
                            pathname: '/library',
                            state: {
                                data: {
                                    id: _id,
                                    isOtherUser: true
                                }
                            }
                        }}
                            className="waves-effect waves-light btn-large light-blue"
                        >Biblioteca de {displayName}</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}