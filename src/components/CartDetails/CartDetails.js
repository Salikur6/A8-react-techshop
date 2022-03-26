import React from 'react';

const CartDetails = ({carts}) => {
    
    // const name =[];
    // const img = [];
    
    // // for(const proparty of carts){
    // //     name.push(proparty.name);
    // //     img.push(proparty.img);
    // //     // console.log(proparty)
    // // }

    
    return (
        <div>
            <h2 className='fw-bold'>Selected Items {carts.length}</h2>
          
          {
              carts.map(cart => <SingleCart key={cart.id} cart={cart}></SingleCart>)  
          }



        </div>
    );
};


const SingleCart = ({cart}) => {

    



        return (
         
         <div className='d-flex mt-3'>
            <img className='border rounded-pill' width='75px' src={cart.img} alt="" />
             <p className='fw-bold'>{cart.name}</p>
         </div>
            
            
        )
}




export default CartDetails;