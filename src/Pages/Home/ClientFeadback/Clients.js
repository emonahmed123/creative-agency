
import lady from '../../../images/customer-1.png'
import saddy from '../../../images/customer-2.png'
import paddy from '../../../images/customer-3.png'
const Clients = () => {
    const Client=[
     {  id:1,
       name:"Nash Patrik",
       title:"Ceo Nark",
       img:lady,
       dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
     },
     {  
        id:2,
       name:"Nash Patrik",
       title:"Ceo Nark",
       img:paddy,
       dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
     },
     {  
        id:2,
       name:"Nash Patrik",
       title:"Ceo Nark",
       img:saddy,
       dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
     }

   ]
  
    return (
    <div className='mt-32 mb-32'>
       
        <h1 className='text-center text-3xl mt-8  mb-8' >Clients <span className='text-success'>Feedback</span> </h1>
             <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3  justify-center   gap-3 mt-5'>
            {
                Client.map(client=><div className='mx-2'>
                
                    <div className=' card  md:max-w-md items-center mx-auto  border pl-5 pt-5 pb-5 ' >
                         <div className='flex  pr-44'>
                           
                         <div className='Avatar w-12 h-12'>
                          <img src={client.img}/>
                          </div>
                        
                        <div className='ml-2 '>
                            <h1 className='mt-1 font-bold  ' >{client.name}</h1>
                              <p className=' mt-2'> {client.title}</p>
                        </div>   

                         </div>
                       <div className='w-full pt-3' >
                         {client.dis}
                        </div>  
                    
                   
                    </div>
                
                
                
                </div>)
          
          } 

         </div>
      
      
    </div>
  )
}

export default Clients
