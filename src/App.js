import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import VerifyOtp from "./components/VerifyOtp/verifyOtp";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import Forget from "./components/ForgetPassword/forget";
import SetPassword from "./components/SetPassword/setPassword";
// import Navbar from "./components/Navbar";

function App() {
  // let baseUrl = "http://localhost:8080";
  // const [data, setData] = useState([]);

  // let callApi = () => {
  //   axios.get(baseUrl + "/api/student").then((res) => {
  //     setData(res.data);
  //   }).catch = (e) => {
  //     console.log("error", e);
  //   };
  // };

  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/VerifyOtp" element={<VerifyOtp />} />
        <Route path="/Forget" element={<Forget/>} />
        <Route path="/SetPassword" element={<SetPassword/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
