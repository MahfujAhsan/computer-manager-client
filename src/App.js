import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/Login/ProtectedRoute";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={
          <ProtectedRoute>
            <Purchase />
          </ProtectedRoute>}>
        </Route>

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
            <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
