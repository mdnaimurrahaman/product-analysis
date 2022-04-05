import React from 'react';
import './Reviews.css'
import ReviewData from '../../Hooks/ReviewData';
import AllCustomerReviews from '../HomeCustomerReview/AllCustomerReviews/AllCustomerReviews';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setreviews] = ReviewData()
    return (
        <div className='text-center mb-3'>
            <div className='review-container container'>
                {
                    reviews.map(review => <AllCustomerReviews key={review.id}review={review}></AllCustomerReviews>)
                }
                <div className='mt-5'>
                <Link className='see-btn' to="/">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Reviews;