import React from 'react'
import NavBar from './NavBar'
import '../css/header.css'

export default function Header() {
  return (
    <div id='header'>
      <NavBar/>
      <div className='header-text'>
        <p>UI/UX Designer</p>
        <h1>Hi, I'm <span>Akash</span><br></br>Pratap From India</h1>
      </div>
    </div>
  )
}
