import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes , Route} from 'react-router-dom'
import Singup from './Pages/Login/Singup';
import DashBoard from './Pages/DashBoard/DashBoard';
import RequireAuth from './Pages/Login/RequierAuth';
import Order from './Pages/Home/Order';
import Servicelist from './Pages/DashBoard/Servicelist';
import Productsprovider from './Context/Productsprovider';
import Orderconfim from './Pages/DashBoard/Orderconfim';
import AddService from './Pages/DashBoard/AddService';



function App() {
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
        <Route path='/order/:id' element={<Order></Order>}></Route>
        <Route path='/login' element={  <Login></Login>}></Route>
        <Route path='/singup' element={  <Singup></Singup>}></Route>
        <Route path='dashboard'element={<DashBoard></DashBoard>} >
          <Route path='servicelist' element={<Servicelist></Servicelist>}>

          </Route>
          <Route path='addservice' element={<AddService></AddService>}>

          </Route>
          <Route path='ordercomfir' element={<Orderconfim></Orderconfim>}>

          </Route>


        </Route>


     </Routes>

     </Productsprovider>

    </div>
  );
}

export default App;
