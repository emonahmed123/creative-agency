import React from 'react'
import logo from '../../images/logos/logo.png'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation,Outlet } from 'react-router-dom';
import { AiFillShopping,AiOutlinePlus,AiOutlineUserAdd,AiFillMessage,AiOutlineShoppingCart} from 'react-icons/ai'
const DashBoard = () => {
    const [user] = useAuthState(auth);
    const {pathname}=useLocation()
  return (

  <div>
  <div class="drawer drawer-mobile">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col"> 
    <div class="w-full navbar bg-white">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2 font-bold text-xl">
         {
          pathname.includes("servicelist")&& <h1>Service List</h1>
         }
         {
          pathname.includes("addservice")&& <h1>Add Service</h1>
         }
         {
          pathname.includes("ordercomfir")&& <h1>Order</h1>
         }
          </div>
      <div class="flex-none  lg:block">
        <ul class="menu menu-horizontal">
        
          <li><p className='font-bold'>{user?.displayName}</p></li>
          
        </ul>
      </div>
    </div>
        <div className='bg-[#DEFFED] md:ml-0 pl-5 h-[700px]'>
        <Outlet></Outlet>
      </div>     
    


  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
   
    <ul class="menu p-4 w-80 bg-base-100">
    <div>
        <Link to="/home">   <img className='w-32 mb-10 ml-10' src={logo}/></Link>
 
    </div>
           
      <li className='ml-10' > <Link to='/dashboard/servicelist'> < AiFillShopping/>Service list</Link></li>
      <li className='ml-10'><Link to='/dashboard/addservice'><AiOutlinePlus/>Add Service</Link></li>
      <li className='ml-10'><a><AiOutlineUserAdd/>Make Admin</a></li>
      
      <li className='ml-10' > <Link to="/dashboard/ordercomfir"> <AiOutlineShoppingCart/>Order</Link></li>
      <li className='ml-10'><a><AiFillShopping/>Service list</a></li>
      <li className='ml-10'><a><AiFillMessage/>Review</a></li>
      
    </ul>
    
  </div>
</div>

  </div>
  )
}

export default DashBoard
