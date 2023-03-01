import React, { useState } from "react";
// import { BsArrowRight, BsHeartFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

//import donate from '../assets/donate.JPG'

function Request() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    phoneno:"",
    problem:"",
    message:""
  })


  function handleChange (e) {
   const{name, value} =e.target
   setFormData(prevFormData => ({
     ...prevFormData,
     [name]: value
   }))
  }

function handleSubmit (e) {
  e.preventDefault()
  console.log(formData)
  
}







  return (
    <div className="request" id="request">
      <div className="container">
     
        <div className="col form card" data-aos='fade-right'>
          <form onSubmit={handleSubmit} className="py-3">
            <h3 className="">Request for support</h3>
               <input type="text" placeholder="First name" value={formData.firstname} name='firstname' onChange={handleChange}/>
               <input type="text" placeholder="Last name" value={formData.lastname} name='lastname' onChange={handleChange}/>
               <input type="email" placeholder="Email" value={formData.email} name='email' onChange={handleChange}/>
               <input type="number" placeholder="Phone number" value={formData.phoneno} name='phoneno' onChange={handleChange}/>
               {/* <input type="text" placeholder="Address" className="address"/> */}
           <br />
            <label htmlFor="problem" className="py-1">I'm having a problem with</label>
            <br />
            <select id="problem"
            name='problem' onChange={handleChange}
            value={formData.problem}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value=''>Select option</option>
              <option value="school fees">School fees</option>
              <option value="medical bills">Medical bills</option>
            </select>
    <br />
           <textarea name="message" id="message" cols="20" rows="4" value={formData.message} onChange={handleChange} placeholder='Describe your problem'></textarea>
            <br />
            <button className="acct btn4">
               Submit
            </button>
         
          </form>
        </div>

        <div className="col fundraiser"data-aos='fade-left' >
          <div className="f-text">
         <h3>HELP RAISE MONEY!</h3>
         <p>Support this important cause by creating a personalized fundraising page</p>
         <button className="btn5">Start a fundraiser</button>
         <div className="socials">
           <FaFacebook/>
           <FaLinkedin/>
           <FaTwitter/>
         </div>
        
         </div>
        </div>
      </div>
    </div>
   
  );
}

export default Request;
