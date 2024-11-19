import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [state, setState] = useState({
    bookName: '',
    des: '',
    author: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/addBook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then((Res) => Res.json())
      .then((res) => {
                console.log(res);
                if (res.success) {
                  navigate('/success'); 
                } else {
                  alert('Failed to add book');
                }
              })
              .catch((err) => console.error(err));
          };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="book-form">
        <h1>Add a New Book</h1>
        <input
          type="text"
          placeholder="Book Name"
          name="bookName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="des"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';
// import success from './components/success';

// function App() {
//   const [state, setState] = useState({
//     bookName: '',
//     des: '',
//     author: '',
//     image: '',
//     price: ''
//   });

//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:8080/addBook`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(state)
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         if (res.success) {

//           navigate('/success'); 
//         } else {
//           alert('Failed to add book');
//         }
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <form action="" onSubmit={handleSubmit} className="book-form">
//       <h1>Add a New Book</h1>
//       <input
//         type="text"
//         placeholder="Book Name"
//         name="bookName"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         name="des"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Author"
//         name="author"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Image URL"
//         name="image"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Price"
//         name="price"
//         onChange={handleChange}
//       />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// export default App;
