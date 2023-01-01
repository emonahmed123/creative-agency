import React from 'react'

function MakeAdmin() {
  return (
    <div className='max-w-[1044px]  bg-white h-[335px] mx-10 mt-5'>
       

         <form>
            
       <div className='flex  items-center '>
    
       <div className='w-full max-w-[450px] pr-4 ml-6 pt-4   '>
            <label className='font-bold'>
              Email
            </label><br/>
            <input 
              type="email"
              className='w-full md:w-full max-w-[450px] py-1 border' />
      
          </div>
          <input className='w-[108px] Buttonn mt-11 ' type='submit' value="Sumbit"/>
      

       </div>

         </form>

    </div>
  )
}

export default MakeAdmin
