import NavBar from "./Shared/NavBar"
import Image from './Shared/Image'
import Profile from './Shared/Profile'
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="appDiv">
    <NavBar />
    <Image /> 
    <Profile />
    </div>
  );
}

export default App;
