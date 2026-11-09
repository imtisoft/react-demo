import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

function App() {
  const [headerMode,setHeaderMode]=useState('light');
  const [myMode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
            })
            // alert message timeout
            setTimeout(() => {
              setAlert(null);
            }, 3000);
          }
  
const toggleModeHeader=()=>{
  if(headerMode==='dark')
  {
    setHeaderMode('light');
    // document.body.style.backgroundColor='white';
    showAlert("Light Mode Header Enabled","Succes:");
  }
  else
  {
    setHeaderMode('dark');
    // document.body.style.backgroundColor='grey';
    showAlert("Dark Mode Header Enabled","Succes:");
  }
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
    document.body.style.backgroundColor='darkgrey';
    showAlert("Dark Mode Enabled","Succes:");
  }
}


  return (
    <>    
     <Router>
      <Navbar title="Text Magic Web" mode={myMode} toggleMode={toggleMode} toggleModeHeader={toggleModeHeader}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={myMode} />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </div>
</Router>



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="250px" width="250px"/>
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

