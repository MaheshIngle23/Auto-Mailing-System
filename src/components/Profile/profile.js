// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config.json";
// import { NavLink } from "react-router-dom";
import "./profile.css";
import Navbar from "../Navbar";


const Profile = () => {
  // let navigate = useNavigate();

  //  let logout = () => {
  //    sessionStorage.clear();
  //  };

  return (
    <section>
      <Navbar />
      <div className="form_data">
        <div className="form_heading">
          <h1>Student Profile</h1>
          <p style={{ textAlign: "center" }}>Welcome to CDAC Bengaluru..</p>
        </div>
        <div className="profile-info">
        </div>
        {/* <button className="btn" onClick={}>
          Logout
        </button> */}
      </div>
    </section>
  );
};

export default Profile;
