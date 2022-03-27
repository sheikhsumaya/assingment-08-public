
import React, { useEffect, useState } from 'react'
import Order from '../Orders/Order';

import Tea from '../Tea/Tea';
import './TeaCart.css';


const TeaCart = () => {


  const [data, setTea] =useState([]);
  const [cart, setCart] = useState([]);
  useEffect( ()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setTea (data))
  },[])

  const handleClick = (data) =>{
    const newCart = [...cart, data];
    setCart(newCart);
  }
  const clearCart = () =>{
    setCart([]);
  }
  return (
    <div className='tea-container'>
      <div className="product-container">
        {
          data.map(data=> 
          <Tea 
          key={data.id}
          data={data}
          handleClick={handleClick}
          ></Tea> )
        }
      </div>
      <div className="cart-container">
        <h2 className='text'>Orders Items</h2>
        <h4 className='text'>
          Selected Items: {cart.length}
        </h4>
        {
          cart.map(product=> 
          <Order 
          key={product.id}
          product={product}
          handleClick={handleClick}
          ></Order> )
        }
        <button className='rmv-btn' onClick={clearCart}>Remove All</button>
        
      </div>
    </div>
  );
};

export default TeaCart;