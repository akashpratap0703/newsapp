import React from 'react'
import '../css/navbar.css';


export default function NavBar() {  
  const openmenu= ()=>{
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"
  }
  const closemenu= ()=>{
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px"
  }
  return (
    <div>
    <div className="container">
    <nav>
        <img src="./logo192.png" alt="img" className="logo"/>
        <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#timeline">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className='fas fa-times' onClick={()=>closemenu()}></i>
        </ul>
        <i className='fas fa-bars' onClick={()=>openmenu()}></i>
    </nav>
    </div>
    </div>
  )
}
