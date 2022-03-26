import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './SingleCard.css'

const SingleCard = (props) => {
const {card, cartHandler} = props;

    const {img, name, price} = card;

    return (
        <div className='cards col-12 col-md-10 col-lg-4 text-center'>
           <div className='card single-card col-lg-12 bg-white p-3'>
                <img className='w-100' height='196px' src={img} alt="" />
                <h4 className='fw-bold '>{name}</h4>
                <p className='fw-bold'>Price: {price}</p>
                <button onClick={()=>cartHandler(card)} className='cart-btn fw-bold text-primary'>ADD TO CART<FontAwesomeIcon className='text-secondary ps-2' icon={faShoppingCart}></FontAwesomeIcon></button>
           </div>
           
          
        </div>
    );
};

export default SingleCard;