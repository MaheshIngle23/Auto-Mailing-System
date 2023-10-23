import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import Logo from './logo.jpg';
import { useNavigate } from "react-router-dom";

const App = () => {
  const [loggedIn, setLogedIn] = useState(false);
  // let loggedIn = false;

  useEffect(()=>{
    if(sessionStorage.getItem("email")){
      setLogedIn(true)
    }
  },[])
 
  let navigate = useNavigate();

  let logout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div >
        <Link to='/' ><img  className= "navbar-logo" src={Logo} alt='' /></Link> 
        </div>
        <ul className="navbar-links">
          <li><Link to='/' >Home</Link></li>
         {!loggedIn && <li><Link to='/register' >Register</Link></li>}
         {!loggedIn &&<li><Link to='/login' >Login</Link></li>}
         {loggedIn && <li><Link to='/profile'>Profile</Link></li>}
         {loggedIn && <li><Link to='/login' onClick={logout}>Logout</Link></li>}
        </ul>
      </nav>
    </div>
  );
};

export default App;


//maheshingle23@gmail.com