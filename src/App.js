import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      <Navbar title="Hi guys" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode}/>
        <About mode={mode}/>
        
      </div>

    </>

  );
}

export default App;
