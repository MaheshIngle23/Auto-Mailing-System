import React from "react";
import axios from "axios";
import { useState } from "react";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


function SetPassword() {
  const [newPassword, setNewPassword] = useState();
  let navigate = useNavigate();



  let resetPassword = () => {
    let email = sessionStorage.getItem("email");

    axios
      .put(config.baseUrl + "/set-password?email=" + email + "&newPassword=" + newPassword)
      .then((res) => {
        let temp = res.data;
        if (temp === "Password Reset Successfully") {
        //   credentials();
        sessionStorage.removeItem("email");
          navigate("/Login");
        } else if (temp === "User not found with this email: ") {
          alert("User not found with this email.");
        }
      });
  };

  return (
    <section>
      <Navbar/>
      <div className="form_data">
        <div className="form_heading">
          <h1>Set Password</h1>
          <p style={{ textAlign: "center" }}>Set Your Password Here..</p>
        </div>
        <div className="form">
          <div className="form_input">
            <label>Enter New Password</label>
            <input type="text" 
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="btn" onClick={resetPassword}>
          Reset Password
        </button>
      </div>
    </section>
  );
}

export default SetPassword;
