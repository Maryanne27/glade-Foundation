import React from 'react'
import {BsHeartFill, BsArrowRight} from 'react-icons/bs'


function Hero() {
  // const[activeNav, setActiveNav] = useState('#')

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
    <div className='hero-container hero'>
        <div className="container" data-aos='fade-up'>
      <h1>Glade COVID-19 Relief fund</h1>
      <p>Lets make a difference today. Join us in the fight against COVID-19.</p>
      
     <a href='#about' className='btn acct' onClick={makePayment}>
       <BsHeartFill className=''/>  Donate </a>
       {/* <button className='acct'>
       <a href="#request" onClick={() => setActiveNav('#request')} className={activeNav === '#about' ? 'active': ''}>
              <small>
                <BsArrowRight className="arrow"/>
                Request for support
              </small>
              </a>
            </button> */}
        </div>
        </div>
  )
}

export default Hero