import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';


function App() {
  return (
    <>
   
<Navbar title="Text Magic Web"/>
<div className="container">
<TextForm heading="Enter Your Text Here :"/>
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

