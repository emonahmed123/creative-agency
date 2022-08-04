
import lady from '../../../images/customer-1.png'
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
       img:lady,
       dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
     },
     {  
        id:2,
       name:"Nash Patrik",
       title:"Ceo Nark",
       img:lady,
       dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
     }

   ]
  
    return (
    <div className='mt-11 mb-6'>
       
        <h1 className='text-center text-2xl mt-8 ' >Clients <span className='work-color'>Feedback</span> </h1>
             <div className='flex w-full justify-center   flex-col md:flex-row  mt-5'>
            {
                Client.map(client=><div>
                
                    <div className=' w-full  lg:w[1000px] items-center  mx-auto border pl-5 pt-5 pb-5 ' >
                         <div className='flex items-center gap-2'>
                           
                         <div className='Avatar w-16 h-16'>
                          <img src={client.img}/>
                          </div>
                        
                        <div>
                            <h1 className='mt-1 font-bold' >{client.name}</h1>
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
