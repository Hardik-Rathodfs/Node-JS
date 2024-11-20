import React from 'react'

const Allbooks = () => {
  fetch("http://localhost:8080/addBook")
  .then(Res => Res.json())
  .then(Res=>Res)
  return (
    <>
   <h1>
    hello
   </h1>
    </>
  )
}

export default Allbooks