import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  const[state,setState]=useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();

 const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(state);
    try {
      const response = await fetch(`http://localhost:8080/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      if (response.ok) {
        console.log("User added successfully:", result);
        navigate("/login");
      } else {
        console.error("Failed to add movie:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setState({...state,[name]:value})
  }


  return (
    <div>
    <>

<div className="login">
<div className="login__content">
  <div className="login__img">
    <img decoding="async" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODVjNjRwZnZpcDN5N3VpNGI5NHNtcHhqNDNxdDh0anBoZjhsMDZ5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3CKQBS0NoXTOTlpezy/giphy.webp" alt="" />
  </div>
  <div className="login__forms">
    <form onSubmit={handleSubmit} className="login__registre" id="login-in">
      <h1 className="login__title">Sign In</h1>
      <div className="login__box">
        <i className="bx bx-user login__icon" />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          className="login__input"
        />
      </div>
      <div className="login__box">
        <i className="bx bx-user login__icon" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="login__input"
        />
      </div>
      <div className="login__box">
        <i className="bx bx-lock-alt login__icon" />
        <input
          type="password"
          name='password'
          onChange={handleChange}
          placeholder="Password"
          className="login__input"
        />
      </div>
      <a href="#" className="login__forgot">
        Forgot password?
      </a>
      <button type='submit' href="#" className="login__button">
        Sign In
      </button>
      <div>
        <span className="login__account">Don't have an Account ?</span>
     <Link to={"/"}>  
        <span className="login__signin" id="sign-up">
          Login
        </span>
        </Link>
      </div>
    </form>
    <form action="" className="login__create none" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="login__box">
        <i className="bx bx-user login__icon" />
        <input
          type="text"
          placeholder="Username"
          className="login__input"
        />
      </div>
      <div className="login__box">
        <i className="bx bx-at login__icon" />
        <input type="text" placeholder="Email" className="login__input" />
      </div>
      <div className="login__box">
        <i className="bx bx-lock-alt login__icon" />
        <input
          type="password"
          placeholder="Password"
          className="login__input"
        />
      </div>
      <a href="#" className="login__button">
        Sign Up
      </a>
      <div>
        <span className="login__account">Already have an Account ?</span>
        <span className="login__signup" id="sign-in">
          Sign In
        </span>
      </div>
      <div className="login__social">
        <a href="#" className="login__social-icon">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="login__social-icon">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="login__social-icon">
          <i className="bx bxl-google" />
        </a>
      </div>
    </form>
  </div>
</div>
</div>
{/*===== MAIN JS =====*/}
</>

</div>
  )
}

export default Signup