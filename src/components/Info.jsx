import React from 'react'
import vaccine from '../assets/vaccine.JPG'
import img2 from '../assets/response2.JPG'
import img1 from '../assets/donate.JPG'

function Info() {
  return (
    <div className='info'>
       <div className="container">
         <div className="row">
           <div className="col-lg-4 card2">
  <img src={img2} alt="covid19" height='400px' width='350px' />
  <div className="intro">
      <h1>GLADE FOUNDATION GOAL</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, sunt amet dolorum saepe aliquam ipsa at ratione doloremque eius dicta deleniti unde aperiam. Molestias iste quaerat cupiditate vel explicabo aperiam.</p>
  </div>
           </div>

<div className="col-lg-4 card2 green">
<img src={vaccine} alt="vaccineimage" height='400px' width='350px'/>
<div className="intro">
      <h1>COVID-19 VACCINATION</h1>
      <p> Possimus molestias dolore amet, fuga eligendi deleniti consequatur similique eum nobis quod quam ut quia facere quas velit provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, animi quisquam consectetur hic ducimus laudantium fugit soluta harum obcaecati incidunt. Adipisci, ducimus aperiam.</p>
  </div>
</div>


<div className="col-lg-4 card2">
 <img src={img1} alt="donationimage" height='400px' width='350px'/>
 <div className="intro green">
      <h1>DONATIONS ARE STILL NEEDED</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis animi, repellendus nulla doloremque ea dolor eos explicabo! Reprehenderit ex assumenda, ipsam voluptates qui nesciunt. Necessitatibus tempora quis maiores quisquam.</p>
  </div>
</div>

</div>
       </div>
        </div>
  )
}

export default Info