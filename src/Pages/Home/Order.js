import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../Context/Productsprovider'

function Order() {
  
    

    return (
   
        <div className=' w-full flex justify-center '>
         <Link to='/home'>Back</Link>
        <div className=' w-[340px]  h-[300px] mt-11   pb-10 pt-4 shadow-lg ' >

        <div className='flex justify-center'>
           <img  className='w-16 h-16 ' src=''/>

         </div>
            
           <div className='p-8 w-full'>
            <h1 className='text-center text-xl  md:text-xl lg:text-2xl font-bold'>name</h1>
            <p className='text pt-2 text-sm  text-center'>discription</p>
            <button  className='btn btn-success  w-full 
             mt-10'>Click To Order</button>
            
         
           </div>
          


        </div>

       </div>
  )
}

export default Order
