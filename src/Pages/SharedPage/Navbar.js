import React from 'react'
import './Navbar.css'
import log from '../../images/logos/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
      const menu=<>
       
        <li className='text-sm pt-2 '><Link to='/'>Home</Link></li> 
        <li className='text-sm pt-2 '><Link to=''>Our Team</Link></li> 
        <li className='text-sm pt-2 '><Link to=''>Our Portfolio</Link></li> 
        <li className='text-sm pt-2 '><Link to> Contact us</Link></li> 
        <li className='w-32 h-10 litext  md:pl-[2.5rem] md:pt-[0.5rem] ml-2  bg-black text-white rounded'><Link to='/login'>Login</Link></li> 

        </>

      
    return (
    <div className=''>
   
<div class="navbar  stckiy">
  <div class="navbar-start  ">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
            {/* <li className='mr-10 '><a href=''>Home</a></li> 
             <li className='mr-10 '><a href=''>OurTeam</a></li> 
             <li className='mr-10'><a href=''>OurPortfolio</a></li> 
             <li className='mr-10'><a href=''>Contact us</a></li> 
             <li className='mr-10  p-2 bg-black text-white pl-10 rounded'><a href=''>Login</a></li>  */}

             {
              menu
             }
       
      </ul>
    </div>
    <img src={log}  className='w-32 ml-24 pb-6 mt-6' alt='logo'/>
  </div>
  <div class=" mx-auto hidden lg:flex mt-[1.25rem]  ">
    <ul class=" flex gap-3  ">
           {
            menu
           }
    </ul>
  </div>
  {/* <div class="navbar-end">
 
  </div> */}
</div>



    </div>
  )
}

export default Navbar
