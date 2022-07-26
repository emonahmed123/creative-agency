import React from 'react'
import './Service'
function Service({service}) {
  const {name,img,id,discription}=service
    return (
    <div>
      
       <div className='w-96 h-44 mt-11 mb-11 ml-6 '>
         <div className='flex justify-center'>
           <img  className='w-16 h-16 ' src={img}/>

         </div>
            
           <div className='p-8'>
            <h1 className='text-center text-3xl font-bold'>{name}</h1>
            <p className='text-xl  pt-2 text-center'>{discription}</p>
           </div>

       </div>
       


    </div>
  )
}

export default Service
