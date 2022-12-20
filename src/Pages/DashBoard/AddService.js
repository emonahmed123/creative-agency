import React from 'react'

const AddService = () => {
  return (
    <div className=' '>
      <div className='max-w-[1044px]  bg-white h-[335px] mx-10 mt-5 Addpro'>
        <form onSubmit={''}>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gird-cols-2'>
            <div className='flex flex-col  w-full max-w-lg ml-6 pt-4 '>
              <label className='font-bold'>Service Tilte</label>
              <input
                type="text"
                className='w-3/4 md:w-full   max-w-[450px] py-1 border'
              />
            </div>
            <div className='pt-4 pl-6 md:pl-0 text-[#009444] '>
              <h1 className='font-bold'>Icon</h1>
              <button className='Buttonn'>Upload Image</button>

            </div>
          </div>
          <div className='w-full flex flex-col max-w-lg ml-6 pt-4  '>
            <label className='font-bold'>
              Description
            </label>
            <textarea rows={4}
              type="text"
              className='w-3/4  md:w-full max-w-[450px] py-1 border' />
          </div>
             

             <div className='flex justify-end kku '>
             <input className='InputSend' type="submit" value="Submit"/>
             </div>
        </form>


      </div>

    </div>
  )
}

export default AddService
