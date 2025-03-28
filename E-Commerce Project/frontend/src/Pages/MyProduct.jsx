import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const MyProduct = () => {
    const navigate=useNavigate()
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch("http://localhost:5110/myProducts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user Products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching user Products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, []);

  const handleDelete = async (id) => {
    // console.log(id)
    try {
      const response = await fetch(`http://localhost:5110/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete Product");
      }

    } catch (error) {
      console.error("Error deleting Product:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEdit = (id) => {
    navigate(`/EditProduct/${id}`); 
  };

  return (
    <>
      <Header />
      <section className="s-content">
        <div className="row masonry-wrap">
          <div className="masonry" id="sy3">
            <div className="grid-sizer"></div>
            <div className="container" style={{ width: "30%" }}>
              {Products.map((el) => (
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
                      <p>
                        {el.description}
                      </p>
                    </div>
                    <br />
                    <div className="entry__meta">
                      <span className="entry__meta-links">
                        <a>{el.category}</a>
                      </span>
                    </div>
                    <br /><br />
                    <div className="entry__actions">
                      <div>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(el._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyProduct;