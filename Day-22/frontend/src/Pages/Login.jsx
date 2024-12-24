import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <>
  
  <div className="login">
    <div className="login__content">
      <div className="login__img">
        <img decoding="async" src="https://raw.githubusercontent.com/alsiam/alsiam/refs/heads/main/assets/programmer.gif" alt="" />
      </div>
      <div className="login__forms">
        <form action="" className="login__registre" id="login-in">
          <h1 className="login__title">Login</h1>
          <div className="login__box">
            <i className="bx bx-user login__icon" />
            <input
              type="text"
              placeholder="Username"
              className="login__input"
            />
          </div>
          <div className="login__box">
            <i className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              placeholder="Password"
              className="login__input"
            />
          </div>
          <a href="#" className="login__forgot">
            Forgot password?
          </a>
          <a href="#" className="login__button">
            Login
          </a>
          <div>
            <span className="login__account">Don't have an Account ?</span>

          <Link to='/Signup'> 
            <span className="login__signin" id="sign-up">
            Register Here
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

export default Login