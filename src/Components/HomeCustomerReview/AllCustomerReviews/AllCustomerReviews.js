import React from 'react';
import './AllCustomerReviews.css'

const AllCustomerReviews = (props) => {
    const {name,img,body,rating} = props.review
    return (
        <div className='review-info'>
            <h3>{name}</h3>
            <p><small>{rating}</small></p>
            <p>{body}</p>
        </div>
    );
};

export default AllCustomerReviews;