import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    // setText("Your Text");


    //handle functions
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const UpCase = () => {
        let upText = text.toUpperCase();
        setText(upText);
    }
    const LowCase = () => {
        let upText = text.toLowerCase();
        setText(upText);
    }
    const ClearCase = () => {
        let clearText = " ";
        setText(clearText);
    }
    const CopyText = () => {
        navigator.clipboard.writeText(text);
    }




    return (
        <>
            <div className="container my-3" style={{ backgroundColor: props.mode == 'light' ? "white" : "#475663", color: props.mode == 'light' ? "#475663":"white"}}>
                <h2 className="centertxt">{props.header}</h2>
                <div className="mb-3">
                    <textarea className={`form-control`} id="Textarea1" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode == 'light' ? "white" : "#60778a",color:props.mode == 'light' ? "#616161" : "white",fontSize:"20px"}}></textarea>
                </div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button className="btn btn-danger mx-2" onClick={UpCase}> Upeer Case</button>
                    <button className="btn btn-danger mx-2" onClick={LowCase}> Lower Case</button>
                    <button className="btn btn-danger mx-2" onClick={CopyText}> Copy</button>
                    <button className="btn btn-danger mx-2" onClick={ClearCase}> Clear</button>
                </div>
                <h3 className="p-2 mt-2">Text Summary</h3>
                <p> <b>Charchaters:</b> {text.length}</p>
                <p> <b>Word Count:</b> {text.split(" ").length - 1}</p>
            </div>


        </>
    );
}

