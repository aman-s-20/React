import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Upper case was clicked" + text);
        props.showAlert("Converted to Upper case","success");
        let newsentence = text.toUpperCase();
        setText(newsentence);
    };
    const handleLoClick = () => {
        console.log("Lower case was clicked" + text);
        props.showAlert("Converted to Lower case","success");
        let newsentence = text.toLowerCase();
        setText(newsentence);
    };
    const handleClearClick = () => {
        let newtext = '';
        props.showAlert("Text has been cleared","success");
        setText(newtext);
    };
    const handleOnChange = (event) => {
        console.log("on change" + text);
        setText(event.target.value);
    };

    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'#042743'}} className="container ">
                <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows="8"
                        style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                   Upper case
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Lower case
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                   Clear Text
                </button>
            </div>
            <div  style={{color: props.mode==='dark'?'white':'#042743'}} className="container my-3 ">
                <h1 >Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <h2>Prievew</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
