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
    <div>
      <div className='mt-32'><p className=' text-xl lg:text-3xl text-center font-bold'>Provide awesome <span className='work-color'> services</span> </p></div>

      <div className='flex  justify-center   flex-col  lg:flex-row w-full mt-3'>

           {
            services?.map(service=><Service key={service.id}  service={service} ></Service>)

           }

      </div>



    </div>
  )
}

export default Servicces
