import React from 'react';
import './Reviews.css'
import ReviewData from '../../Hooks/ReviewData';
import AllCustomerReviews from '../HomeCustomerReview/AllCustomerReviews/AllCustomerReviews';

const Reviews = () => {
    const [reviews, setreviews] = ReviewData()
    return (
        <div className='review-container container'>
            {
                reviews.map(review => <AllCustomerReviews key={review.id}review={review}></AllCustomerReviews>)
            }
        </div>
    );
};

export default Reviews;