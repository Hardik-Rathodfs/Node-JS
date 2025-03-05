import React, { useState } from 'react';
import axios from 'axios';
import Aside from './Aside';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const WriteBlog = () => {
  const [token, setToken] = useState((localStorage.getItem("Token")) || null);

  console.log(token)

  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  
  let all = date + " " + month + " " + year;

  const navigate = useNavigate();

  const [fromdata, setState] = useState({
    title: "",
    description: "",
    image: "",
    all: all
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fromdata);
    
    
    try {
      const response = await fetch(`https://blogapp-backend-hpen.onrender.com/createblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fromdata),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Blog submitted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        console.error("Failed to add BLog Data", result.message);
        toast.error("Failed to add BLog Data!!",result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission !",error);
    }
    
    setState({
    title: "",
    description: "",
    image: "",
    });
  };

  const handleChange = async (e) => {
    let { name, value } = e.target;
    setState({ ...fromdata, [name]: value });
  };



  return (
    <>
   
    <Aside/>
    <ToastContainer/>
     <div className="container">
    <h1 style={{textAlign:"center"}}>Add Blogs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
           name="title"
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Blog Content"
          name='description'
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          name='image'
          onChange={handleChange}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
 
    </div>
    </>
  );
};

export default WriteBlog;
