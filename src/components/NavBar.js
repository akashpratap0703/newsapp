import React from 'react'
import '../css/navbar.css';


export default function NavBar() {
  return (
    <div>
    <div className="container">
    <nav>
        <img src="./logo192.png" alt="img" className="logo"/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
    </div>
    </div>
  )
}
