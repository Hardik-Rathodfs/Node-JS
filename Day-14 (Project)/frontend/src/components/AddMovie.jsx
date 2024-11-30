import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [state, setState] = useState({
    title: '',
    poster: null,
    rating: '',
    year: '',
  });

const navigate=useNavigate()

  const handleChange = (e) => {

     const { name, value } = e.target;
        if (name === 'poster') {
            setState({ ...state, [name]: e.target.files[0] });
        } else {
            setState({ ...state, [name]: value });
        }
    };

      
  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', state.title);
    formData.append('poster', state.poster);
    formData.append('rating', state.rating);
    formData.append('year', state.year);
try {
    const response=await fetch(`http://localhost:8080/addmovie`,{
        method:"POST",
        body:formData,

    })

    const result = await response.json();

    if(response.ok)
    {
        console.log("Movie Added Succesfully",result);
        // navigate("/allmovie")
    }
    else
    {
        console.error('Failed to add movie:', result.message);
    }
} catch (error) {
    console.error('Error during submission:', error);
}
}

  return (
    <div className="add-movie-container">
      <form onSubmit={handleSubmit} method='post' action='/addmovie' encType="multipart/form-data" className="add-movie-form">
        <h2>Add a Movie</h2>
        <input type="text" name="title" placeholder="Enter Movie Title" onChange={handleChange} />
        <input type="file" name="poster" onChange={handleChange} />
        <input type="text" name="rating"  placeholder="Enter Rating Here" onChange={handleChange} />
        <input type="text" name="year"  placeholder="Enter Released Year" onChange={handleChange} />
        {/* <button type="submit">Submit</button> */}
        <input type="submit" />
      </form>
    </div>
  );
  
};

export default AddMovie;
