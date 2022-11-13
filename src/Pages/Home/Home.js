import React from 'react'
import Uber from './Uber/Uber'
import Fristpart from './Fristpart/Fristpart'
import Servicces from './Servicces/Servicces'
import Work from './Work/Work'
import Clients from './ClientFeadback/Clients'
import Navbar from '../SharedPage/Navbar'
import Contact from './Contact/Contact'
const Home=()=>{

 return(
     <div>
      <Fristpart></Fristpart>
       <Uber></Uber>
      <Servicces></Servicces>
       <Work></Work>
       <Clients></Clients> 
      <Contact ></Contact> 
   
     </div>


 )



}
  export default Home