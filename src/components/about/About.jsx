import React from "react";
import {  BsHeartFill } from "react-icons/bs";
//import { FaLock } from "react-icons/fa";

//import abtimg from '../assets/donate.JPG'

function About() {

  // const [formData, setFormData] = useState({
  //   amount: "",
  //   frequency:"",
  //   payment:"Gladepay"
  // })


  // function handleChange (e) {
  //  const{name, value} =e.target
  //  setFormData(prevFormData => ({
  //    ...prevFormData,
  //    [name]: value
  //  }))
  // }

// function handleSubmit (e) {
//   e.preventDefault()
//   console.log(formData)
// }

function makePayment() {
  window.initPayment({
  MID:"GP_9695a6071e26433f929b490d7128ecbb",
  KEY: "b0e25a0647ed4276a42fcab6e1897103",
  email: "j.ryanne20@gmail.com",
  firstname:"Maryanne",
  lastname:"Onwuemene",
  description: "",
  title: "",
  amount: 10000,
  country: "NG",
  currency: "NGN",
  onclose: function() {
    console.log("Payment closed")
  },
  callback: function(response) {
    console.log(response);
  }
});
}


  return (
    <div className="about" id="about">
     <div className="container abt-container"> 
  
        <div className="col1">
          <h1 className="big">Defeating COVID-19 takes a coordinated global response</h1>
          </div>

          <div className="col2 text2">
            <h3>How will your contribution help?</h3>
          <p>Your contribution will directly support countries and communities with
            the greatest need to prevent, detect, and respond to the COVID-19
            pandemic.
          </p>
          <div className="">
          <a href="#" type='button' className="btn btn3" onClick={makePayment}>
              <BsHeartFill className="heart" /> Donate Now
            </a>
            
          </div>
        </div>

        {/* <div className="col2 card col-md-6">
          <form onSubmit={handleSubmit} className="form-card" >
            <h3>COVID-19 RELIEF FUND</h3>
            <p className="sm">How much would you like to donate today?</p>
           
            <label htmlFor="amount" className="py-1">Select Amount</label>
            <div className="form-input">
            <span className="sign">₦</span>
            <select
            id="amount" name="amount"
            value={formData.amount}
            onChange={handleChange}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value=''>00.00</option>
              <option value='10000'>10000</option>
              <option value="25000">25000</option>
              <option value="50000">50000</option>
              <option value="100000">100000</option>
            </select>
            </div>
          


            <label htmlFor="frequency" className="py-1">Frequency</label>
            <select
            id="frequency" name="frequency"
            value={formData.frequency}
            onChange={handleChange}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example" >
              <option value=''>--choose--</option>
              <option value='once'>One time</option>
              <option value="monthly">Monthly</option>
            </select>

            <label htmlFor="paymentmethod" className="py-1">Payment method</label>
            <select
            id="payment" name="payment"
            value={formData.payment}
            onChange={handleChange}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
             
              <option value="Gladepay">GladePay</option>
              <option value="Mobile transfer">Bank transfer</option>
             
            </select>
            <br />
            <button type='button' className="btn btn3" onClick={makePayment}>
              <BsHeartFill className="arrow" /> Donate Now
            </button>
            <p className="text-center py-3 lockp"><FaLock className="lock"/> Secure Payment</p>
          </form>
        </div> */}
      </div>
      </div>
   
  );
}

export default About;
