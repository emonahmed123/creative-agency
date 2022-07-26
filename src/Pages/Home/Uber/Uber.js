import React from 'react'
import google from '../../../images/logos/google.png'
import stack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import netflex from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const Uber = () => {
  return (
    <div>
      <div className='flex flex-col ml-10 justify-center md:gap-20 mt-9 md:flex-row lg:flex-row'>
        <div className='w-32 h-24'>
        <img src={stack}/>
        </div>
        <div className='w-32 h-24' >
        <img src={google}/>
        </div>
        <div className='w-20 h-24'>
        <img src={uber}/>
        </div>
        <div className='w-24 h-24'>
        <img src={netflex}/>
        </div>
        <div className='w-32 h-24'>
        <img src={airbnb}/>
        </div>



      </div>
    </div>
  )
}

export default Uber
