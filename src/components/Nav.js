import React, { useEffect, useState } from 'react'
import './css/Nav.css'

function Nav() {

  const[show ,handleShow] = useState(false)

  const transitionNavbar=()=>{
    if(window.scrollY>100){
    handleShow(true)
    }
    else{
      handleShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",  transitionNavbar)

    return()=>{
      window.removeEventListener("scroll", transitionNavbar)
    }
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_content'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-2014-present.jpg' alt=' '/>
            
        </div>
      
    </div>
  )
}

export default Nav;
