import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Tea.css'

const Tea = (props) => {
  const {data, handleClick} = props;
  const {name, id, price, img, ratings, manufacture} = data;
 
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
    <button onClick={() => handleClick(data)} className='btn-cart'>
      <p className='btn-text'>Add To Cart</p>
      <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
    </button>
    </div>
  );
};

export default Tea;