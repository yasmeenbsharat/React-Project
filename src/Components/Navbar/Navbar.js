import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css"

export default class 
extends Component {
  render() {
    return (
      <div>
      <nav className={`navbar ${style.navbar} navbar-expand-lg fixed-top py-3`}>
  <div className="container">
    <a className={`navbar-brand`} href="#">START BOOTSTRAP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className={`nav-item  me-4`}>
          <Link className={`nav-link ${style.navLink} active `} aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li className={`nav-item me-4 `}>
          <Link className={`nav-link ${style.navLink}`} to="/about">About</Link>
        </li>
        <li className={`nav-item  me-4 `}>
          <Link className={`nav-link ${style.navLink}`} to="/contact">Contact</Link>
        </li>
      
      
       
      </ul>
      
    </div>
  </div>
</nav>


        
    



      </div>
    )
  }
}
