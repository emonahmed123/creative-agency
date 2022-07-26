import React, { useState } from 'react'
import './Navbar.css'
import log from '../../images/logos/logo.png'
const Navbar = () => {

    return (
    <div className=''>
        <nav className=''>
          <div>
          <img src={log}  className='w-24 ml-24 pt-6' alt='logo'/>

          </div>
            <ul className='md:flex justify-end mx-32 flex-none  '>
            
             <li className='mr-10 '><a href=''>Home</a></li> 
             <li className='mr-10 '><a href=''>OurTeam</a></li> 
             <li className='mr-10'><a href=''>OurPortfolio</a></li> 
             <li className='mr-10'><a href=''>Contact us</a></li> 
             <li className='mr-10   w-28 bg-black text-white pl-10 rounded'><a href=''>Login</a></li> 
</ul>

</nav>
    </div>
  )
}

export default Navbar
