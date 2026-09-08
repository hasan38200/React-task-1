import React from 'react'
import "./Card.css"
import mobile from "../../assets/mobile.png"

const Card = () => {
  return (
    <>
    <div className='card'>
        <img src={mobile} alt="" />
        <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, amet!</p>
    </div>
    </div>
    </>
  )
}

export default Card