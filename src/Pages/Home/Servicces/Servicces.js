import React, { useEffect, useState } from 'react'
import Service from './Service';

const Servicces = () => {
  const [services, setServices] = useState();

  useEffect(() => {

    fetch('/Serviec.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='w-full'>
    <p className=' text-xl lg:text-3xl text-center font-bold'>Provide awesome <span className='work-color'> services</span> </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto'>

           {
            services?.map(service=><Service key={service.id}  service={service} ></Service>)

           }

      </div>



    </div>
  )
}

export default Servicces
