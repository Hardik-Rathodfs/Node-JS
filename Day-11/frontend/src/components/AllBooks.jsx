// import React from 'react'

// const Allbooks = () => {
//   fetch("http://localhost:8080/addBook")
//   .then(Res => Res.json())
//   .then(Res=>Res)
//   return (
//     <>
//    <h1>
//     hello
//    </h1>
//     </>
//   )
// }

// export default Allbooks

import React, { useEffect, useState } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch books on component load
  useEffect(() => {
    fetch("http://localhost:8080/addBook") // Adjust the endpoint as needed
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      {/* Mapping over books to display them */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={book.image}
                alt={book.bookName}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "12px",
                  borderRadius: "4px",
                }}
              />
              <h2 style={{ fontSize: "18px", margin: "8px 0" }}>{book.bookName}</h2>
              <p style={{ margin: "8px 0", fontStyle: "italic", color: "#666" }}>{book.des}</p>
              <p style={{ fontWeight: "bold", margin: "8px 0" }}>Author: {book.author}</p>
              <p style={{ color: "#2d87f0", fontWeight: "bold", margin: "8px 0" }}>${book.price}</p>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
