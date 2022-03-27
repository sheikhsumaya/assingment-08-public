import React from 'react';
import './Orders.css'

const Order = (props) => {
  console.log(props.product.name)
  
  return (
    <div className='order'>
      <img src={props.product.img} alt="" />
     <h4>Name:{props.product.name} </h4>
     <h5>Price:{props.product.price}</h5>
     <p><small>Date:{props.product.manufacture}</small></p>

    </div>
  );
};

export default Order;