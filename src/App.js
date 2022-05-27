import './App.css';
import React, {useState} from 'react'
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {       //This function is JSX which is actually Js written in the form of html 
  const [mode, setMode] = useState('light');   //initially light mode is set
  
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }



  const toggleMode =()=>{
      if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#203b68';
        showAlert("Dark mode has been enabled", "success");
        document.title= "TextUtils - DarkMode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - LightMode";
      }
  }

  return (
    <>                        
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
              {/* <About/> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>
    </>
  );
} 

export default App;
