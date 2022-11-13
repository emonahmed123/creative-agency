import React from 'react'
import './Service'
function Service({service}) {
  const {name,img,id,discription}=service
    return (
     
      
       <div className=' w-full  h-auto mt-11   pb-10 pt-4 hover:shadow-lg  '>
        <div>

        <div className='flex justify-center'>
           <img  className='w-16 h-16 ' src={img}/>

         </div>
            
           <div className='p-8'>
            <h1 className='text-center text-xl  md:text-xl lg:text-2xl font-bold'>{name}</h1>
            <p className='text pt-2 text-sm  text-center'>{discription}</p>
           </div>




        </div>

       </div>
       


    
  )
}

export default Service
