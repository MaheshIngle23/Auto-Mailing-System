import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import './Login.css'
import Navbar from "../Navbar";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, showEmailError] = useState(false);
  const [passwordError, showPasswordError] = useState(false);
  let navigate = useNavigate();

  let validate = () =>{
    let error= false

    if(email === ""){
      showEmailError(true)
      error= true
    }

    if(password === ""){
      showPasswordError(true)
      error = true
    }

    return error
  }

  let login = () => {

    if(validate()){
      return
    }

    // if(email === "" && password === ""){
    //   showEmailError(true)
    //   showPasswordError(true)
    //   return
    // }
    // if(password === ""){
    //   showPasswordError(true)
    //   return
    // }
    
    let json = {
      email: email,
      password: password,
    };

    axios.put(config.baseUrl + "/login", json).then((res) => {
      let temp = res.data;
      if (temp === "Login successful") {
        sessionStorage.setItem("email", email)
        navigate("/Profile");
      }
    });
  };

  return (
    <section>
      <Navbar />
      <div className="form_data">
        <div className="form_heading">
          <h1>Log In</h1>
          <p>Hi, we are you glad you are back. Login Here.</p>
        </div>
        <div className="form">
          <div className="form_input">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value)
                showEmailError(false)
              }}
            />
          </div>
          {emailError && <span className ="error">Email cannot be empty</span> }
          <div className="form_input">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value)
                showPasswordError(false)
              }}
            />
          </div>
          {passwordError && <span className="error">Password cannot be empty</span> }
          <button className="btn" onClick={login}>Log In</button>
          <p>
            Forgot Password?    <NavLink to="/forget">Forgot Password</NavLink>
          </p>
          <p>
            Don't have an Account?    <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

