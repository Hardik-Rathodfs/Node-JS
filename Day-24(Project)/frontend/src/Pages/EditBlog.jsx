import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Aside from "./Aside";

const EditBlog = () => {
  const [token, setToken] = useState((localStorage.getItem("Token")) || null);
  const [category, setCategory] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();


  // console.log(token)

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

  const handleChange = async (e) => {
    let { name, value } = e.target;
    setFromdata({ ...fromdata, [name]: value });
  };

  const handleSort = (event) => {
    const selectedCategory = event.target.value;
    setFromdata((prevData) => ({
      ...prevData,
      category: selectedCategory,
    }));
  };

  const [fromdata, setFromdata] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    date: all
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem("Token");
      try {
        const response = await fetch(`https://blogapp-backend-hpen.onrender.com/editget/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blog data.");
        }

        const data = await response.json();
        console.log(data)
        setFromdata(data.blog)
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    
    fetchBlog();
  }, [id]);
  
  // console.log(fromdata)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://blogapp-backend-hpen.onrender.com/editblog`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id,
          ...fromdata
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Blog updated successfully!");
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        console.error("Failed to update Blog Data:", result.message);
        toast.error("Failed to update Blog Data:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission!", error);
    }
  };

  return (
    <>
<Aside/>
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
      <section className="s-content--narrow">
        <div className="comments-wrapp">
          <div id="comments" className="row">
            <div className="col-full">
              <div className="respond">
                <h3 className="h2">Edit Your Blog </h3>

                <form className="form" onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="title"
                        type="text"
                        className="full-width"
                        placeholder="Blog Title"
                        value={fromdata.title}
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="description"
                        type="text"
                        className="full-width"
                        placeholder="Blog Description"
                        value={fromdata.description}
                      />
                    </div>

                 
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="image"
                        type="text"
                        className="full-width"
                        placeholder="Your Image Link"
                        value={fromdata.image}
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default EditBlog