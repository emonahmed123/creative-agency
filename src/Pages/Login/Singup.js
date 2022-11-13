import React from 'react'
import Logo from '../../images/logos/logo.png'
import google from '../../images/logos/Group 571 (1).png'
import { Link } from 'react-router-dom'
const Singup = () => {
  return (
    <div className='max-w-[1240px] mx-auto ' >
    <div className='w-full flex items-center  flex-col   ' >
   
      
        <Link to='/home' className='mt-20 mb-5 '>  <img  className='w-[150px] h-[41]  ' src={Logo} /> </Link>
      
         <div className='w-96 md:w-[570px] h-[450px] flex items-center border' >
                <div className='w-full flex justify-center flex-col items-center'>
                 <h1 className=' font-bold   text-2xl mb-5'>Singup With</h1>
                 
                    <div className='flex border rounded-full w-[350px] h-12  '>
                       <img className='w-8 h-8 mt-2' src={google}/> <button className='ml-16 font-semibold'>Contiune with Google</button>
                    </div>
                  
                  <p className='mt-3 text-[12px] font-bold' > have an account?<Link to='/login'><span className='text-[#3F90FC]' > Go To Login</span></Link></p>
                    </div>
         </div>


    </div>
  </div> 
    
    
  )
}

export default Singup
