import React from 'react'
import fram from '../../../images/logos/Frame.png'
const Banner = () => {
  return (
    <div>
   <div class="hero min-h-screen shrink-0 mt-16">
  <div class="hero-content flex-col lg:flex-row-reverse gap-32">
    <img src={fram} class=" w-[586px] rounded-lg" />
    <div className='mb-20'>
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
