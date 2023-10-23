import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "../Navbar";


function Register() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let signUp = () => {
    if( validateForm()){
      let json = {
        fullName: fullName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
  
      axios.post(config.baseUrl + "/register", json).then((res) => {
        let temp = res.data;
        if (temp === "User registration successful") {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", password);
          navigate("/VerifyOtp");
        } else if (temp === "User Already Exist"){
          alert("User Already Exist")
        }
        else if (temp === "User Email Already Exist"){
          alert("User Email Already Exist")
        }
      })
      .catch=(e) => {
        console.log("Error", e);
      };
    }
  };

  return (
    <section>
      <Navbar/>
      <div className="form_data">
        <div className="form_heading">
          <h1>Register</h1>
          <p style={{ textAlign: "center" }}>
            Welcome to CDAC Bengaluru, register here..
          </p>
        </div>

        <div className="form">
          <div className="form_input">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>

          <div className="form_input">
            <label>Email *</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form_input">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="form_input">
            <label>Confirm Password *</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>

          <button className="btn" onClick={signUp}>
            Register
          </button>
          <p>
            Already have an account? <NavLink to="/Login">Log In</NavLink>
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default Register;


