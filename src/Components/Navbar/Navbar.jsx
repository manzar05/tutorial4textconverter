import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
        <span>Text Converter</span>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Help</a></li>
        </ul>
        <input type="search" placeholder='Search' />
    </div>
  )
}

export default Navbar;