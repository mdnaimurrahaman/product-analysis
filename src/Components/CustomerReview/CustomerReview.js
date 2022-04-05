import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewData from '../../Hooks/ReviewData';
import ShowReview from '../ShowReview/ShowReview';
import './CustomerReview.css'


const CustomerReview = () => {
    const [reviews, setReviews] = ReviewData();
    console.log(reviews)
    return (
        
        <div className='customer-review mt-4'>
            <h3 className='text-center mb-3 text-white'>Customer review</h3>
            {
                reviews.slice(0,3).map(reviewItem => <ShowReview reviewItem={reviewItem} key ={reviewItem.id}></ShowReview>)
            }
            <div className='mt-3'>
                <Link className='see-btn' to="/reviews">See all</Link>
            </div>
        </div>
    );
};

export default CustomerReview;

