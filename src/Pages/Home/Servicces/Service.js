import React from 'react'
import './Service'
function Service({service}) {
  const {name,img,id,discription}=service
    return (
    <div className='mb-10 sm:ml-0 md:ml-[10rem] lg:ml-0 '> 
      
       <div className=' w-[340px] lg:w-[385px] h-auto mt-11  ml-[16px]  pb-10 pt-4 hover:shadow-lg '>
        <div>

        <div className='flex justify-center'>
           <img  className='w-16 h-16 ' src={img}/>

         </div>
            
           <div className='p-8'>
            <h1 className='text-center text-xl lg:text-3xl font-bold'>{name}</h1>
            <p className='text pt-2 text-center'>{discription}</p>
           </div>




        </div>

       </div>
       


    </div>
  )
}

export default Service
