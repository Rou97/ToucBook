import React, { useState, useEffect } from 'react';
//import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function BookMood(props) {
    const [mood, setMood] = useState();
    const [button, setButton] = useState();

    useEffect(() => {
        try {
            if (props.a.bookMood) {
                setMood('Estado: Lo tengo');
                setButton('quiero');
            } else {
                setMood('Estado: Lo quiero');
                setButton('tengo');
            }

        } catch (error) {
            console.error(error);
        }
    }, [props.a.bookMood]);


    async function changeMood(x) {
        x.bookMood = !x.bookMood;
        const b = await Axios.post("http://localhost:5000/library/changemood", x);
        if (b.data.bookMood) {
            setMood('Estado: Lo quiero');
            setButton('tengo');
        } else {
            setMood('Estado: Lo tengo');
            setButton('quiero');
        }
    }

    return (
        <div className="row">
            <div className="col">
                <button className="btn waves-effect blue" onClick={() => changeMood(props.a)}>{mood} || Cambiar estado</button>
            </div>
        </div>
    )
}
