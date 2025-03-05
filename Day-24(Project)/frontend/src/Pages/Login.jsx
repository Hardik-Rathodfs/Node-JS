import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Aside from './Aside';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import Popover from './Popover';


const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
  
    try {
      const response = await fetch(`https://blogapp-backend-hpen.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
  
      const result = await response.json();
      if (response.ok) {
        const token = result.token;
        console.log("Token:", token);

        localStorage.setItem("Token", token);

        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(result.msg || "Login Failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error during submission:", error);
    }
  };
  return (
    <>
      <Aside />
      <div className="login-container">
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

        <div className="login-form-wrapper">
          <h2>Welcome Back</h2>
          {/* {error && <div className="error-alert">{error}</div>} */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgot-password">
          <Popover/>

              {/* <Link to="/forgot-password">Forgot Password?</Link> */}
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;