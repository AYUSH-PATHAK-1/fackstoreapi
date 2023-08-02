import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import './App.css';
import axios from 'axios';


const apilink="https://fakestoreapi.com/products"


function App() {
  // https://fakestoreapi.com/products

  const[fack,setFack]=useState([]);
  useEffect(()=>{
    // fackstore();
    const data=axios.get(apilink).then((response)=>{
      setFack(response.data);
    })
  },[])

  // const fackstore=async()=>{
  //   const response=await fetch("https://fakestoreapi.com/products");
  //   const jsonData=await response.json();
  //   setFack(jsonData);
  // }
  return (
      <>
      <h1>Fack Store API</h1>
      <div className="container">
         {fack.map((values)=>{
          return(
            <>
            <div className="box">
          <div className="content">
              <h5>{values.title}</h5>
              <p>{values.description}</p>
          </div>
          <img src={values.image} alt="logo" />
        </div>
            </>
          )
         })}       
      </div>
      </>
  )
}

export default App