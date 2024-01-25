import React, { useState } from "react";
import "./App.css";
import Signup from "./components/userlogin/SignUp";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
    
      {login ? <Home /> 
      : 
      <Signup onLogin={() => setLogin(true)} />}
    </div>
  );
}

export default App;
