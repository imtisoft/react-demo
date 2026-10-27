import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {

  //Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
  };

  // Copy Text to ClipBoard
  const handleCopy = () => {
  console.log("I am Copy");
  var textC = document.getElementById("myBox");
  textC.select();
  // textC.selectionRange(0,9999);
  navigator.clipboard.writeText(textC.value);
  };

  // 10 digit number extract
  //const [extractedNumber, setExtractedNumber] = useState('');
  

    const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); 
    };

    const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText); 
    };

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClearClick=()=>{
      setText("");
    }
    const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container">
   <div className="mg-3">
        <label htmlFor="myBox" className="form-label"><b>{props.heading}</b></label>
        <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
        
    </div>
    <div className="container">
     <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} ><i className="fa-solid fa-upload"></i> Convert to Uppercase</button>
     <button className="btn btn-info mx-2 my-2" onClick={handleLoClick} ><i className="fa-solid fa-download"></i> Convert to Lowercase</button>
     <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick} ><i className="fa-solid fa-rotate"></i> Clear Text</button>
     <button className="btn btn-success mx-2 my-2" onClick={handleCopy} ><i className="fa-solid fa-right-from-bracket"></i> Copy Text</button>
     <button className="btn btn-warning mx-2 my-2" onClick={handleExtraSpaces} ><i className="fa-solid fa-trash"></i> Remove Extra Spaces</button>
  <br></br>
  
    </div>
    </div>
    
    <div className="container my-2">
      <h3 className="text-danger">Your Text Summary</h3>
      <p>{text}</p>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Required to read it</p>
    </div>
    
    </>
  )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

