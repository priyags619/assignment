import React from 'react'
import './Navbar.css' 

export default function Navbar() {
  return (
    <div className="navbar">
    
    <div className="navlogo"><img src="https://akashgroupofinstitutions.com/images/logo.jpg" alt="logo"/></div>
    <div className="navbaritem">
    <li className="navlistitem"><a href="#home">HOME</a></li>
    <li className="navlistitem"><a href="#news">ABOUT US</a></li>
    <li className="navlistitem"><a href="#contact">PROGRAMMS</a></li>
    <li className="navlistitem"><a href="#about">PLACEMENTS</a></li>
    </div>
  </div>
  )
}
