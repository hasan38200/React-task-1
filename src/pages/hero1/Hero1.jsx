import React from 'react'
import "./Hero1.css"
import mobile from "../../assets/mobile.png"
const Hero1 = () => {
  return (
    <>
    <div className='Hero1'>
<div className='content'>
    <h1>Awesome App<br></br>  App Landing Template</h1>
    <br />
    <br />
    <p>An awesome landing template to showcase your app features,screenshots,<br></br>pricing user testimonials and download links</p>
     <br />
     <ul>
        <li>Amazing Design to present your app</li>
         <br />
        <li>Fully Responsive and Powered By Bootstrap & PaperKit</li>
         <br />
        <li>Very Easy to Customize And Setup</li>
           <br />
     </ul>
   <br />
    <br />
     <button>START EXPLORING</button>
</div>
<div className='Image'>
  
    <img src={mobile} alt="" />
</div>
    </div>
    </>
  )
}

export default Hero1