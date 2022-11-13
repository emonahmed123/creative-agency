import React from 'react';
import Foooter from '../../SharedPage/foooter';
import './Contact';
const Contact = () => {
    return (
       <section className="contact h-100vh  md:h-[570px] bg-[#FBD062]"  >
           <div className="container w-full  flex flex-col md:flex-row  ">
              
                    <div className="w-2/5 mt-28  ml-32">
                        <h2 className="mb-5 text-xl lg:text-3xl">Let us handle your <br /> project, professionally.</h2>
                        <p className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa</p>
                    </div>
                    <div className="w-2/3 mt-16 ml-32">
                        <form action="">
                        <div className='grid grid-cols-1 justify-items-center gap-3'>
            <input
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-lg'
            />
            <input
              type='text'
              placeholder='Subject'
              className='input w-full max-w-lg'
            />
            <textarea
              className='textarea w-full max-w-lg'
              placeholder='Your message'
              rows={6}
            ></textarea>
            
            <div className=' pr-0  lg:pr-[460px]'>
                 <input type="submit" className='bg-black rounded h-10  w-20 text-white' value="Send"/>
             </div>


          </div>

             
                        </form>
                   
         </div>
             

            
           </div>
           <Foooter  ></Foooter>

       </section>
    );
};

export default Contact;