import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes , Route, useLocation} from 'react-router-dom'
import Singup from './Pages/Login/Singup';
import DashBoard from './Pages/DashBoard/DashBoard';
import RequireAuth from './Pages/Login/RequierAuth';
import Order from './Pages/Home/Order';
import Servicelist from './Pages/DashBoard/Servicelist';
import Productsprovider from './Context/Productsprovider';
import Orderconfim from './Pages/DashBoard/Orderconfim';
import AddService from './Pages/DashBoard/AddService';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';



function App() {
  const {pathname}=useLocation()
  
  return (
    <div className="">
     <Productsprovider> 
     <Routes>

        <Route path='/' element={
         <RequireAuth>
        <Home></Home>
        </RequireAuth>
        }></Route>
        <Route path='/home'element={
        <RequireAuth>
        <Home></Home>
        </RequireAuth>
        }></Route>
      
        <Route path='/login' element={  <Login></Login>}></Route>
        <Route path='/singup' element={  <Singup></Singup>}></Route>
      
        <Route path='dashboard'element={<DashBoard></DashBoard>} >
         
          <Route index element={<Servicelist></Servicelist>}></Route>
          <Route path='servicelist' element={<Servicelist></Servicelist>}></Route>
          
          <Route path='addservice' element={<AddService></AddService>}>

          </Route>
          
           
            {
              pathname.includes&&('ordercomfir/:id')?<Route path='ordercomfir/:id' element={<Orderconfim></Orderconfim>}></Route> : ""
            }
             {
              pathname.includes('ordercomfir')&&<Route path='ordercomfir' element={<Orderconfim></Orderconfim>}></Route> 
             }
             
             
            
                   
          <Route  path='makeadmin' element={<MakeAdmin/>}></Route>
    
    </Route>


     </Routes>

     </Productsprovider>

    </div>
  );
}

export default App;
