import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Navber from "./component/Navber/Navber";
import Login from "./component/Login/Login";
import Footer from "./component/Footer/Footer";
import SignUp from "./component/SignUp/SignUp";
import Purchase from "./component/Purchase/Purchase";
import AddProduct from "./component/Product/AddProduct";
import ManageTools from "./component/ManageTools/ManageTools";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ManageOrders from "./component/ManageOrders/ManageOrders";
import Dashboard from "./component/Dashboard/Dashboard";
import MyOrder from "./component/Dashboard/MyOrder";
import AddReview from "./component/Dashboard/AddReview";
import MyProfile from "./component/Dashboard/MyProfile";
import Users from "./component/Dashboard/Users";

function App() {
  return (
    <div className="">
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/manage-orders" element={<RequireAuth>

          <ManageOrders />
        </RequireAuth>}></Route>
        <Route
          path="/add-tools"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-tools"
          element={
            <RequireAuth>
              <ManageTools />
            </RequireAuth>
          }
        ></Route>

        {/* ////////purchase made require */}
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >


          <Route index element={<MyOrder/>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="all-users" element={<Users></Users>}></Route>
        </Route>

 

        {/* ////////purchase made require  */}
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
