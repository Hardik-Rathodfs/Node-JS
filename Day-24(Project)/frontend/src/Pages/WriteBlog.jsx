import React, { useState } from 'react';
import axios from 'axios';
import Aside from './Aside';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(''); // For error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, imageUrl };

    try {
      const response = await axios.post('http://localhost:8080/blogs', newBlog);
      setBlogs([...blogs, response.data]);
      setTitle('');
      setContent('');
      setImageUrl('');
      setError(''); // Clear error message on success
    } catch (err) {
      console.error("Error saving blog:", err);
      setError('Failed to save the blog. Please try again.');
    }
  };

  return (
    <>   
    <Aside/>
     <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <h2>Blogs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}> {/* Assuming backend returns unique 'id' */}
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>
                <img
                  src={blog.imageUrl || 'default-image-url.jpg'} // Fallback image
                  alt={blog.title}
                  style={{ width: '100px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>

  );
};

export default WriteBlog;
