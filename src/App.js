import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Navber from './component/Navber/Navber';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import SignUp from './component/SignUp/SignUp';
import Purchase from './component/Purchase/Purchase';
import AddProduct from './component/Product/AddProduct';
import ManageTools from './component/ManageTools/ManageTools';

function App() {
  return (
    <div className="">
      <Navber></Navber>
   
<Routes>

  <Route path="/" element={<Home/>}></Route>
  <Route path="login" element={<Login/>}></Route>
  <Route path="/signup" element={<SignUp />}></Route>
  <Route path="/add-tools" element={<AddProduct />}></Route>
  <Route path="/manage-tools" element={<ManageTools />}></Route>


  {/* ////////purchase made require */}
  <Route path="/purchase/:toolId" element={<Purchase />}></Route> 
  {/* ////////purchase made require  */}
</Routes>

<Footer></Footer>

    </div>
  );
}

export default App;
