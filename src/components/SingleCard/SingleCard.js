import React from 'react';

const SingleCard = (props) => {
    return (
        <div className='col-12 col-md-10 col-lg-4'>
            <img className='w-100' src={props.card.img} alt="" />
        </div>
    );
};

export default SingleCard;