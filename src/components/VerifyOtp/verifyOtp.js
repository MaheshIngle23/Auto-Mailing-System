import React, { useState } from "react";
import axios from "axios";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import "./VerifyOtp.css";
import Navbar from "../Navbar";


function VerifyOtp() {
  const [otp, setOtp] = useState();
  let navigate = useNavigate();

  let verify = () => {
    let email = sessionStorage.getItem("email");
    let password=sessionStorage.getItem("password");
   
    axios
      .put(config.baseUrl + "/verify-account?email=" + email + "&otp=" + otp)
      .then((res) => {
        let temp = res.data;
        if (temp === "OTP verified you can login") {
          navigate("/Login");
        } else if (temp === "Please regenerate otp and try again") {
          alert("Please regenerate otp and try again");
        }
      });

    axios.post(config.baseUrl + "/send-email?email="+email + "&password="+password ).then((res) => {
      let temp = res.data;
      if (temp === "Email with Attachment Sent Successfully") {
        navigate("/Login");
      } else if (temp === "User not found with this email: ") {
        alert("Enter Valid Email Address");
      }
    });
  };

  let regenerate = () => {
    let email = sessionStorage.getItem("email");

    axios
      .put(config.baseUrl + "/regenerate-otp?email=" + email + "&otp=" + otp)
      .then((res) => {
        let temp = res.data;
        if (temp === "Email sent... please verify account within 3 minute") {
          navigate("/VerifyOtp");
        } else if (temp === "Please regenerate otp and try again") {
          alert("Please regenerate otp and try again");
        }
      });
  };

  return (
    <section>
      <Navbar/>
      <div className="form_data">
        <div className="form_heading">
          <h1>Verify OTP Here</h1>
        </div>
        <div className="form">
          <div className="form_input">
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button className="btn" onClick={verify}>
            Verify
          </button>
          <button className="btn" onClick={regenerate}>
            Regenerate OTP
          </button>
        </div>
      </div>
    </section>
  );
}

export default VerifyOtp;


