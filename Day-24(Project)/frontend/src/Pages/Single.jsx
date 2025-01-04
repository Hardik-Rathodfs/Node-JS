import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Aside from "./Aside"

const Single = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8080/allBlogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="s-pageheader">
      <Aside/>
      <section className="s-content s-content--narrow s-content--no-padding-bottom">
        <article className="row format-standard">
          <div className="s-content__header col-full">
            <h1 className="s-content__title">{blog.title}</h1>
            <ul className="s-content__header-meta">
              <li className="date">{blog.date}</li>
              <li className="cat">
              
                <a>{blog.category}</a>
              </li>
            </ul>
          </div>

          <div className="s-content__media col-full">
            <div className="s-content__post-thumb">
              <img src={blog.image} alt={blog.title} />
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">{blog.description}</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Single;
