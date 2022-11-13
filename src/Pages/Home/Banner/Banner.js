import React from 'react'
import fram from '../../../images/logos/Frame.png'
const Banner = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
   <div class="hero h-min-screen     shrink-0 pt-3 md:mt-10 lg:mt-10">
  <div class="hero-content flex-col lg:flex-row-reverse gap-32 mb-11">
    <img src={fram} class=" w-[300px] md:w-[400px] lg:w-[536px] rounded-lg  " />
    <div className='mb-11 mx-auto lg:mb-0 lg:mt-3'>
      <h1 class="text-5xl font-bold">Let’s Grow Your <br/>
         Brand To The <br/>
         Next Level</h1>
      <p class="py-6">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
      <button className="btn btn-active w-40 h-11">Hire Us</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
