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
        const response = await fetch(`https://blogapp-backend-hpen.onrender.com/allBlogs/${id}`);
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
    return (
      <div className="loader">
        <img src="https://media-hosting.imagekit.io//8db333918631479f/1488.gif?Expires=1736162164&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dLNirKyoDbFYe5tYZumwX1HmrY3YxWMedUoPN4Vbf7xdzQJD8x7QjwQGP7GAHJylHXcF3RnZwXeW5AYwvSj~A3a1IOB9klyDaku52UxIrFYohvnHYJi7O~FUZFYR~2zkzNOAAxiXZyL4wZBGAqBDBHVakJasYgctYu7DQIJjQmF~tOt-Xl5HAen6bRRtUbOyjngYL~AYfipMbf~XvzHE4bs4-7UpOUhg4g2ncIl3-lSWCTLjtuK2jzKVDmxLRKNIvspfWOiPG3QhQn2-X8bElGQrgWXkZk04xDCJSt9X0AFxJIL7bZP1IwtItCZqpBCnY8QiC0qsLaV4AYj7VFaliA__" alt="Loading..." />
      </div>
    );
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
