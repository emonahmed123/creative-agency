import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Routes , Route} from 'react-router-dom'
import Singup from './Pages/Login/Singup';

function App() {
  return (
    <div className="">
   
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/login' element={  <Login></Login>}></Route>
        <Route path='/singup' element={  <Singup></Singup>}></Route>

     </Routes>

   

    </div>
  );
}

export default App;
