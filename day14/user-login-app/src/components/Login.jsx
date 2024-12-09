import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Login = ({regLogin}) => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handlelogin=(e)=>{
    e.preventDefault();
    if(email==regLogin.email && password==regLogin.password){
      alert("Login success");
    }
    else{
      alert("Invalid");
    }
  };
  return (
    <div>
       <form>
    <div className="form-group">
      <label for="Email1">Email address</label>
      <input
        type="email" onChange={(e)=>{setEmail(e.target.value);}}
        className="form-control"
        id="Email1"
        placeholder="Enter email"
      />
    </div>
    <div className="form-group">
      <label for="Password1">Password</label>
      <input
        type="password" onChange={(e)=>{setPassword(e.target.value);}}
        className="form-control"
        id="Password1"
        placeholder="Password"
      />
    </div>

    <button onClick={handlelogin} className="btn btn-primary">
      LOGIN
    </button>
  </form></div>
  );
};

export default Login