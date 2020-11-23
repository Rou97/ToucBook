import React, { useState, useEffect } from 'react';
import Axios from "axios";

export default function BookInfoButtons(props) {
    const [mood, setMood] = useState();
    const [button, setButton] = useState();

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
            {mood}
            <button onClick={() => changeMood(props.a)}>Cambiar a lo {button}</button>
        </div>
    )
}
