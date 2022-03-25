import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const LaptopCards = () => {
    const [cards, setCards] = useState([]);

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
                cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
            }
                </div>
            </div>
            <div className="cart-container col-12 col-lg-3 col-md-4 bg-info">
                <h2 className='fw-bold'>Selected Items</h2>
            </div>
        </div>
    );
};

export default LaptopCards;