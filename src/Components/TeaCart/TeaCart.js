import React, { useEffect, useState } from 'react';
import Tea from '../Tea/Tea';
import './TeaCart.css';


const TeaCart = () => {


  const [data, setTea] =useState([]);
  useEffect( ()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setTea (data))
  },[])


  return (
    <div className='tea-container'>
      <div className="product-container">
        {
          data.map(data=> 
          <Tea 
          key={data.id}
          data={data}>

          </Tea> )
        }
      </div>
      <div className="cart-container">
        <h1>Orders</h1>
      </div>
    </div>
  );
};

export default TeaCart;