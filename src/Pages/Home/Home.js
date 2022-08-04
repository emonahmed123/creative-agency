import React from 'react'
import Uber from './Uber/Uber'
import Fristpart from './Fristpart/Fristpart'
import Servicces from './Servicces/Servicces'
import Work from './Work/Work'
import Clients from './ClientFeadback/Clients'
const Home=()=>{

 return(
     <div>
      <Fristpart></Fristpart>
      <Uber></Uber>
      <Servicces></Servicces>
       <Work></Work>

       <Clients></Clients>
     </div>


 )



}
  export default Home