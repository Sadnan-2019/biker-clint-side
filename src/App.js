import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Navber from './component/Navber/Navber';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navber></Navber>
   
<Routes>

  <Route path="/" element={<Home/>}></Route>
  <Route path="login" element={<Login/>}></Route>
</Routes>

<Footer></Footer>

    </div>
  );
}

export default App;
