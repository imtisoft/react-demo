import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
    })
const [btnText, setBtnText] = useState("Enable Dark Mode")

const toggleStyle = () => {
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        });
        setBtnText("Enable Light Mode");
    } else {
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        });
        setBtnText("Enable Dark Mode"); 
    }
};

  return (
    <>
    <div className="container my-3" style={myStyle}>
        <h3>Accordion Example</h3>
            <div className="accordion">
        <details className="accordion-item" name="accordionExample" open style={myStyle}>
            <summary className="accordion-header">
            Accordion Item #1
            {/* <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg> */}
            </summary>
            <div className="accordion-body">
            <strong>This is the first items accordion body.</strong> It is shown by default because the <code>open</code> attribute is present. The native <code>details</code> element handles all the show/hide logic without any JavaScript. You can put any HTML content within the <code>.accordion-body</code>.
            </div>
        </details>
        <details className="accordion-item" name="accordionExample" style={myStyle}>
            <summary className="accordion-header">
            Accordion Item #2
            {/* <svg className="accordion-icon" height="6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg> */}
            </summary>
            <div className="accordion-body">
            <strong>This is the second items accordion body.</strong> The <code>name</code> attribute groups this with other accordion items. When you open this item, any other open item in the same group will close automatically.
            </div>
        </details>
        <details className="accordion-item" name="accordionExample" style={myStyle}>
            <summary className="accordion-header">
            Accordion Item #3
            {/* <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg> */}
            </summary>
            <div className="accordion-body">
            <strong>This is the third item’s accordion body.</strong> This exclusive accordion behavior is built into the browser—no Bootstrap JavaScript required. Just use matching <code>name</code> attributes on your <code>details</code> elements.
            </div>
        </details>
        </div>

        <button onClick={toggleStyle} className="btn btn-info my-3">{btnText}</button>

        
    </div>


    </>
  )
}
