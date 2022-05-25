import React, { useState } from 'react'
import '../App.css'
import '../css/NavbarCSS.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'
import Backdrop from './Backdrop'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className='container flex' style={{"marginTop": "50px"}}>
        {isSidebarOpen ? <> <Sidebar/> <Backdrop setIsSidebarOpen={setIsSidebarOpen}/> </>: null}
        <span id="dimmitt-dome-logo" className='flex' style={{"justifyContent":"flex-start"}}>
            <span onClick={()=>setIsSidebarOpen(!isSidebarOpen)} id="menu-icon">
                <GiHamburgerMenu/>
            </span>
            <h2 className='heading-2'>
                <a href="https://62857c18fe1ffd1573a66a8d--jolly-marigold-b51801.netlify.app/">
                    Dimmitt<span id="dome">Dome</span> 
                </a>
            </h2>
        </span>
        <span id="link-list" className='item flex nav-text' style={{"--gap": "clamp(1.5rem, 5vw, 3.5rem)", "alignItems": "center"}}>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about-me">About</a>
            <a href="/pricing">Prices</a>
        </span>
    </div>
  )
}

export default Navbar