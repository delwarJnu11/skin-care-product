import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-headland-20812.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className="my-5">
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="text-center">
                        <h3 className="review-title">What Our Customer Say</h3>
                        <p className="review-desc">Our product range includes Skin Whitening And Fairness Cream, Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair Conditioner, Chocolate Coffee Face Wash</p>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    reviews.map(review => <Col>
                        <div className="text-center p-3 border h-100">
                            <div>
                                <div className="review-image">
                                    <img src={review.image} alt="" className="img-fluid" />
                                </div>
                                <p className="my-2"><Rating
                                    readonly
                                    style={{ color: "goldenrod" }}
                                    initialRating={review.review}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                /></p>
                                <h4 className="name">{review.name}</h4>
                                <p className="review-text">{review.description}</p>

                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;