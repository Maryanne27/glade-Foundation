import React from "react";
import logo from "../assets/logo.PNG";

import { FaBars, FaTimes } from "react-icons/fa";


function Nav() {
  const navRef = React.useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <h2 className="logo-text">
          Glade<sup>TM</sup>
        </h2>
        <img src={logo} alt="logo" className="logo-img" width="120px" />
      </div>

      <nav ref={navRef} >
        <a href="#about" onClick={showNavbar}>Who we are</a>

        <a href="#info" onClick={showNavbar}>How It Works</a>

        <a href="#"onClick={showNavbar}>Partners</a>

        <a href="#" onClick={showNavbar}>Contact</a>

        <a href="#" onClick={showNavbar}>Login</a>

        <a href="#about" className="btn acct" onClick={showNavbar}>Donate Now</a>

        <FaTimes onClick={showNavbar} className="nav-btn nav-close-btn" />
      </nav>
      <FaBars onClick={showNavbar} className="nav-btn" />
    </header>
  );
}

export default Nav;


  /* <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className='logo'>
           <h2 className='logo-text'>Glade<sup>TM</sup></h2>
           <img src={logo} alt='logo' className='logo-img' width='120px'/>
       </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className=" bars"><FaBars /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Partners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Company</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            What we do
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">login</a>
        </li>
      </ul>
      <button className='acct'>Request support</button>
    </div>
  </div>
</nav> */

