import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CartDetails from '../CartDetails/CartDetails';
import SingleCard from '../SingleCard/SingleCard';
import './LaptopCard.css'

const LaptopCards = () => {
    const [cards, setCards] = useState([]);
    const [carts, setCarts] = useState([]);


    const cartHandler = (card) => {
        let newCarts = []
         newCarts = [...carts, card]
        
        const exists = carts.find(product => product.id === card.id)
        if (!exists) {
          newCarts = [...carts, card]
        }
        else {
          alert('You all ready add this watch')
          
        }

        if(newCarts.length <= 4){
            setCarts(newCarts);
        }else{
            alert('oops',)
           setCarts(newCarts);
        }

         setCarts(newCarts);
    }
    
    const resetBtn =(card) =>{
        setCarts([]); 
        
    };

    const ChooseBtn =(card) =>{
        
        const random = card[Math.floor(Math.random()*card.length)]
        if(random){
            // setCarts([])
            setCarts([random])
        }
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
                    
                    <button onClick={()=>ChooseBtn(carts)}>Choose 1 For Me</button>
                    <button onClick={()=>resetBtn(carts)}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopCards;