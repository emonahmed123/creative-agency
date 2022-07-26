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
      <div className='mt-32'><p className='text-3xl text-center font-bold'>Provide awesome <span className='text-secondary'> services</span> </p></div>

      <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-5  mt-3'>

           {
            services?.map(service=><Service key={service.id}  service={service} ></Service>)

           }

      </div>



    </div>
  )
}

export default Servicces
