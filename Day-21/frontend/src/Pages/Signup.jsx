import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Import Link for navigation
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (E) => {
    E.preventDefault()
    axios.post("http://localhost:8080/register", state)
      .then((Res) => {
        console.log(Res)
        toast.success("Registration successful!"); // Toast for successful registration
        navigate('/');
      }).catch((err) => {
        console.log(err)
        toast.error("Registration failed!"); // Toast for registration failure
      })
  }
  return (
    <div className="signup-container">
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
      <h2>Signup</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} name='username' required className="input-field" />
        <input type="email" placeholder="Email" onChange={handleChange} name='email' required className="input-field" />
        <input type="password" placeholder="Password" onChange={handleChange} required className="input-field" />
        <button type="submit" className="submit-button">Sign up</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p> 
    </div>
  )
}

export default Signup