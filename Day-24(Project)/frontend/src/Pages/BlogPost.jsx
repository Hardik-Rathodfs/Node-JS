import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  return (
    <div>
      {/* Add your blog post content here */}
      <h1>Blog Post {id}</h1>
      {/* Add more content based on the id */}
    </div>
  );
};

export default BlogPost;