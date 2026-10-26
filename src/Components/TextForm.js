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
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
        
    </div>
    <div className="container my-2">
     <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
     <button className="btn btn-info mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
     <button className="btn btn-danger mx-2" onClick={handleClearClick} >Clear Text</button>
     <button className="btn btn-success mx-2" onClick={handleCopy} >Copy Text</button>
     <button className="btn btn-warning mx-2" onClick={handleExtraSpaces} ><i class="bi bi-search"></i>Remove Extra Spaces</button>
  
    </div>
    </div>
    <div className="container my-2">
      <h3>Your Text Summary</h3>
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

