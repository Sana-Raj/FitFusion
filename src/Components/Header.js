import React from 'react'
import logo from "./Assets/logo.png";
import './Header.css'
import Home from './Home';
import Tracker from './Tracker'
import Contact from './Footer'

function Header() {
  return (
    <>
      <section id='header'>
      <img src={logo} alt='logo' id='logo'></img>
      <ul id='nav'>
        <li><a href={Home}>Home</a></li>
        <li><a href={Tracker}>Tracker</a></li>
        <li><a href={Contact}>Contact</a></li>
      </ul>
      </section>
    </>
  )
}

export default Header
