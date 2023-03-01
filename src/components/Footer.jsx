import React from 'react'
import logo from "../assets/logo.PNG";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <div className='footer'>
       <div className="row">

           <div className="col-md-4 ">
           <div className="logo">
          <h2 className="logo-text">
          Glade<sup>TM</sup>
        </h2>
        <img src={logo} alt="logo" className="logo-img" width="120px" />
        </div>
        <p>Follow us:</p>
        <div className="footer-icons socials">
           <FaFacebook/>
           <FaLinkedin/>
           <FaTwitter/>
         </div>
           </div>

<div className="col-md-4">
    <h3>Quick links</h3>
    <a href='#'>Company</a>

<a href='#'>Partners</a>

<a href='#'>Fundraisers</a>
<a href='#'>Products</a>


</div>


<div className="col-md-4">
    <h3 className='covid'>COVID-19 response</h3>
    

<a href='#'>How It Works</a>

<a href='#'>Get involved</a>
<a href='#'>Contact us</a>
<a href='#'>Latest Update</a>
</div>
</div>

<div className='copyright'>
<p>© 2023 designed by Maryanne O. All rights reserved.</p>
</div>
       
        </div>
      
  )
}

export default Footer