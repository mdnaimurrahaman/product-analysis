import React from 'react';
import { Row } from 'react-bootstrap';
import ReviewData from '../../Hooks/ReviewData';
import HomeCustomerReview from '../HomeCustomerReview/HomeCustomerReview';

const CustomerReview = () => {
    const [reviews, setreviews] = ReviewData()
    return (
        <div>
            <h3>{reviews.length}</h3>
            <Row xs={1} md={2} className="g-3">
                {
                    reviews.slice(0,2).map(review =><HomeCustomerReview key={review.id} review={review}></HomeCustomerReview>)
                }
            </Row>
        </div>
    );
};

export default CustomerReview;