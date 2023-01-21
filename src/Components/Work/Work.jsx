import React, {useState} from 'react';
import Image from '../../Images/repost.png';
import './Work.css';
const Work = () => {
    const [text, setText] = useState("Enter Text here");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnClick2 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
  return (
    <div className="container">
    <div className="left">
       <img src={Image}  alt="" />
       <span>Converter</span>
       <div className="summary">
            <span>Summary :</span>
            <span>{text.split(" ").length} words and {text.length} characters <br/>
            <span>Time to read :</span> {0.008 * text.split(" ").length} minutes. </span>
        </div>
    </div>
    <div className="right">
        <div className="top">
            <span>Enter Text To Convert</span>
        </div>
        <div className="mid">
            <textarea name="" value={text} onChange={handleOnChange} id="" cols="50" rows="15"></textarea>
        </div>
        <div className="last">
            <button className="button btn1" onClick={handleOnClick}>Convert To UpperCase</button>
            <button className="button btn2" onClick={handleOnClick2}>Convert To LowerCase</button>
        </div>
        
    </div>
    </div>
  )
}

export default Work;