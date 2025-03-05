import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aside from './Aside';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyBlogs = () => {
  const navigate=useNavigate()
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await fetch("https://blogapp-backend-hpen.onrender.com/myBlogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user blogs");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, [refresh]);


  const handleDelete= async(id)=>
  {
    
    try {
        const response = await fetch(`https://blogapp-backend-hpen.onrender.com/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      setRefresh((prev) => !prev);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  const handleEdit=(id)=>{
    navigate(`/editblog/${id}`)
  }

  return (
    <div className="my-blogs-container">
      <ToastContainer />
      <Aside />
      <div className="s-content">
        <h2>My Blogs</h2>
        <section>
          <div className="masonry" id="sy3">
            {blogs.map((el) => (
              <article
                key={el.id}
                className="masonry__brick entry format-standard aos-init aos-animate"
                data-aos="fade-up"
                id={`sy${el.id}`}
              >
                <div className="entry__thumb">
                  <a className="entry__thumb-link">
                    <img src={el.image} alt="" />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <div className="entry__date">
                      <a>{el.date}</a>
                    </div>
                    <h1 className="entry__title">
                      {el.title}
                    </h1>
                  </div>
                  <div className="entry__excerpt">
                    <p className='pp'>{el.description}</p>
                  </div>
                  <br />
                  <div className="entry__meta">
                    <span className="entry__meta-links">
                      <a>{el.category}</a>
                    </span>
                  </div>
                  <br /><br />
                  <div className="entry__actions">
                    <button onClick={() => handleEdit(el._id)}>Edit</button>
                    <button onClick={() => handleDelete(el._id)}>Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyBlogs;