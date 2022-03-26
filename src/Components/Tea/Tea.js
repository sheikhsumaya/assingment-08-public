import React from 'react';
import './Tea.css'

const Tea = (props) => {
  const {name, id, price, img, ratings, manufacture} = props.data;
  return (
    <div className='tea'>
      <img src={img} alt="" />
      <div>
        <h4>Name:{name}</h4>
        <h5>Price:{price}</h5>
        <p>Ratings:{ratings}</p>
        <p>Production Date:{manufacture}</p>
        <p><small>Id:{id}</small></p>
    </div>
    <button onClick={() => props.handleClick(props.data)} className='btn-cart'>
      <p>Add To Cart</p>
    </button>
    </div>
  );
};

export default Tea;