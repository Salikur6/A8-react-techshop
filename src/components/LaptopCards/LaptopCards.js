import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import SingleCard from '../SingleCard/SingleCard';
import './LaptopCard.css'

const LaptopCards = () => {
    const [cards, setCards] = useState([]);
    const [carts, setCarts] = useState([]);


    const cartHandler = (card) => {
        const newCarts = [...carts, card]
        

         setCarts(newCarts);
    }
    
    useEffect( () => {
        fetch('items.json')
        .then(response => response.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='shop-container row'>
            <div className="cards-container col-12 col-lg-9 col-md-8">
                <div className='row gy-3'>
                {
                cards.map(card => <SingleCard key={card.id} cartHandler={cartHandler} card={card}></SingleCard>)
            }
                </div>
            </div>
            <div className="cart-container col-12 col-lg-3 col-md-4 bg-info">
                <div className='cart-info'>
                    <CartDetails carts={carts}></CartDetails>
                </div>
            </div>
        </div>
    );
};

export default LaptopCards;