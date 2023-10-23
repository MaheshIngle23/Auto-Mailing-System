import React, {useState} from "react";
import axios from "axios";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


// import "./Login.css";

function ForgetPassword() {
  const [email, setEmail] = useState("");

    let navigate = useNavigate();
  
    let forgetPassword = async () => {
        try {
          
          const response = await axios.put(config.baseUrl + "/forget-password?email=" + email);
          
          let temp = response.data;
          
          if (temp === "Email Sent Successfully") {
            sessionStorage.setItem("email", email);
            navigate("/SetPassword");
          } else if (temp === "Unable to send Reset Password Link please try again") {
            alert("Please regenerate email");
          }
        } catch (error) {
          console.error("Unable to send Reset Password Link please try again", error);
          // Handle the error appropriately, e.g., show an error message to the user
        }
      };
      
      
 

  return (
    <section>
      <Navbar />
      <div className="form_data">
        <div className="form_heading">
          <h1>Forget Password</h1>
        </div>
        <div className="form">
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Enter Your Email Address"
              onChange={(e) => 
                setEmail(e.target.value)
              }
              />
          </div>

          <button className="btn" onClick={forgetPassword} >
            Reset
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;