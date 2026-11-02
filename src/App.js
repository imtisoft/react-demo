import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{ useState } from 'react';
import Alert from './Components/Alert';
//import { useState } from 'react';


function App() {
  const [myMode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
            })
            setTimeout(() => {
              setAlert(null);
            }, 3000);
          }
  
const toggleMode=()=>{
  if(myMode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","Succes:");
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode Enabled","Succes:");
  }
}


  return (
    <>
<Navbar title="Text Magic Web" mode={myMode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<TextForm heading="Enter Your Text Here :" mode={myMode} showAlert={showAlert}/>
</div>
<About/>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with IMTIYAZ
        </a>
      </header>
    </div>
    </>
  );
}

 export default App;

