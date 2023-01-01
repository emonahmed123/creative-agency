import React from 'react'
import './order.css'
import {useRef} from 'react';
import svg from '../../images/icons/cloud-upload-outline 1.svg'
import { useParams } from 'react-router-dom';
import { useProduct } from '../../Context/Productsprovider';
const Orderconfim = () => {
  const{services,setService}=  useProduct()
  
  const {id}=useParams()
  



  const Data = services.find(course=> course?.id==id)
  
  console.log(Data)



  const inputRef = useRef(null);

 const handleprop = async(e)=>{
  e.preventdefault()
  
 }

  const handleClick =async(e) => {
    // 👇️ open file input box on click of other element
   
    inputRef.current.click();
    e.preventdefault()

  };

 
 
 
 
 
 
 
  return (
    <div className='mx-w-[1240px] mx-auto' >
        
      
      <div className='mt-10 mx-2' >
     <form onSubmit={handleprop}>
            
        <div className='w-full max-w-[570px] '   >
         <input  type="text"
         className='w-full max-w-[570px] py-3 pl-3 '
         placeholder='Your name / company’s name'
         />

        </div>
        <div className='w-full max-w-[570px] mt-5 '   >
         <input  type="text"
         className='w-full max-w-[570px] py-3 pl-3 '
         placeholder='Your email address'
        
         />

        </div>
        <div className='w-full max-w-[570px] mt-5 '   >
         <input  type="text"
         className='w-full max-w-[570px] py-3 pl-3 '
         placeholder=
         {
          
          
          Data?.name ? Data?.name:"CourseName"
        
        }
         value={Data?.name} readOnly
         />

        </div>
        <div className='w-full max-w-[570px] mt-5 '   >
         <textarea rows={5}  type="text"
         className='w-full max-w-[570px] py-3 pl-3 '
         placeholder='Project Details'
         />

        </div>
        <div className='w-full max-w-[570px] mt-5 flex justify-between'   >
         <input  type="text"
         className='w-[200px] md:w-[284px]  py-3 pl-3 '
         placeholder='Price'
         />
        <div>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
      
      />

      <button className='Button flex justify-center items-center ' onClick={handleClick}> <img className='pr-2' src={svg}/>  Upload project file </button>
    </div>
          
           
        </div>
    {
      Data ?       
      <input type='submit' value="Send" className='Send mt-5 text-white'/>

       : <input type='submit' value="Please Add Service" disabled className='Send mt-5 text-white'/>
       
    }

   

     </form>








      </div>


    </div>
  )
}

export default Orderconfim
