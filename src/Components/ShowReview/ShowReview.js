import React from 'react';
import './ShowReview.css'


const ShowReview = ({reviewItem}) => {
    const {name,body,rating} = reviewItem;
    return (
        <div className=''>
            <div className='d-flex'>
                <p className='fw-bold'>{name}</p>
                <p className='ms-2'><small>{rating}</small></p>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default ShowReview;