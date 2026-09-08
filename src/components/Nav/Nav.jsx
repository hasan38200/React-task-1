import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
    <>
    <nav>
        <h3>AWESOME APP</h3>
         <ul>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li className="download">DOWNLOAD NOW</li>
         </ul>
    </nav>
    </>
  )
}

export default Nav