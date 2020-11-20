import React, { useState, useEffect } from 'react';
//import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function BookMood(props) {
    const [mood, setMood] = useState();
    const [button, setButton] = useState();
    console.log(0);
    console.log(mood);

    // let w;
    // let e;

    // console.log(props.a.bookMood)
    // if (props.a.bookMood) {
    //     w = 'Lo tengo';
    //     e = 'quiero'
    // } else {
    //     w = 'Lo quiero';
    //     e = 'tengo'
    // }

    // if (mood === undefined) {
    //     setMood('hey')
    // }

    useEffect(() => {
        try {
            if (props.a.bookMood) {
                setMood('Lo tengo');
                setButton('quiero');
            } else {
                setMood('Lo quiero');
                setButton('tengo');
            }

        } catch (error) {
            console.error(error);
        }
    }, [props.a.bookMood]);


    async function changeMood(x) {
        x.bookMood = !x.bookMood;
        const b = await Axios.post("http://localhost:5000/library/changemood", x);
        console.log(b);
        if (b.data.bookMood) {
            setMood('Lo quiero');
            setButton('tengo');
        } else {
            setMood('Lo tengo');
            setButton('quiero');
        }
    }

    return (
        <div>

            {/* {w}
            <button onClick={() => changeMood(props.a)}>Cambiar a lo {e}</button> */}

            {mood}
            <button onClick={() => changeMood(props.a)}>Cambiar a lo {button}</button>
        </div>
    )
}
