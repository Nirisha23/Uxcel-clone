import React from 'react'
import { useRef } from 'react';
import logo from '../../assets/uxcel-SVG.svg'

import { FiChevronDown } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./navbar.css"

function Navbar() {

  const navRef = useRef();
  const showNavBar= () =>{
    navRef.current.classList.toggle("reponsive-nav")
  }
  return (
    <div className='navBody'>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
     <nav ref={navRef}>
          <a href="#">Product <FiChevronDown /></a>
          <a href="#">Resources <FiChevronDown /></a> 
          <a href="#">Pricing</a>
          <a href="#">What's New</a>
          <a href="#">For Teams</a>
          <div className="close-icon" onClick={showNavBar}><FiX /></div>
          <div className="nav-btn responsive">
        <a className='nav-secondary' href="#">Log In</a>
        <a className='nav-primary' href="#">Get Started</a>
      </div>
      </nav>
      <div className="nav-btn">
        <a className='nav-secondary' href="#">Log In</a>
        <a className='nav-primary' href="#">Get Started</a>
      </div>
      <div className="bar"  onClick={showNavBar}><FiMenu /></div>
    </div>
    
  )
}

export default Navbar