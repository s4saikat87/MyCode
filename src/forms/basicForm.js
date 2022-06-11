import React from 'react'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
  
  
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dashboard  from './dashboard'; 



function BasicForm() {
  
  // JSX code for login form
  
  

  return (
    <Router>      
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/dashboard' element={<Dashboard />} />
         </Routes>    
    </Router>     
  );
}


function Home(){

// React States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();
// User Login info
const database = [
  {
    username: "priyanki",
    password: "pc1234"
  },
  {
    username: "saikat",
    password: "sg1234"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();
debugger;
  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      navigate("/dashboard",{state:1});
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );



  return(
<div className="app">
<div className="login-form">
<div className="title">Sign In</div>
<div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" value="Login with Microsoft"/>
      </div>
    </form>
  </div>
  </div>
  </div>
  )
};



export default BasicForm;

