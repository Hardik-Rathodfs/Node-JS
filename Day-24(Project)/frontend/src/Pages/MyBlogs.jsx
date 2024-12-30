import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
   
      const response = await fetch('http://localhost:8080/my-blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        // Add your API endpoint here
        const response = await fetch(`http://localhost:8080/blogs/${blogId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setBlogs(blogs.filter(blog => blog.id !== blogId));
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div className="my-blogs-container">
      <h2>My Blogs</h2>
      <div className="blogs-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <div className="blog-actions">
              <Link to={`/edit-blog/${blog.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button 
                onClick={() => handleDelete(blog.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;