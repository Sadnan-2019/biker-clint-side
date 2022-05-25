import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Navber from './component/Navber/Navber';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
   
<Routes>

  <Route path="/" element={<Home/>}></Route>
</Routes>

    </div>
  );
}

export default App;
