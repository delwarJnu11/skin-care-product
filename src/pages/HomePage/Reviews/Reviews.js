import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://skin-care-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="my-5">
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <div className="text-center">
            <Fade left cascade>
              <h3 className="review-title">What Our Customer Say</h3>
            </Fade>
            <Fade Right cascade>
              <p className="review-desc">
                Our product range includes Skin Whitening And Fairness Cream,
                Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair
                Conditioner, Chocolate Coffee Face Wash
              </p>
            </Fade>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row xs={1} md={3} className="g-4 mt-4">
        {reviews.map((review) => (
          <Col key={review._id}>
            <div className="text-center p-3 border h-100">
              <Zoom>
                <div>
                  <div className="review-image">
                    <img src={review.image} alt="" className="img-fluid" />
                  </div>
                  <p className="my-2">
                    <Rating
                      readonly
                      style={{ color: "goldenrod" }}
                      initialRating={review.review}
                      emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                      fullSymbol={<FontAwesomeIcon icon={faStar} />}
                    />
                  </p>
                  <h4 className="name">{review.name}</h4>
                  <p className="review-text text-muted text-center">
                    {review.email}
                  </p>
                  <p className="review-text">{review.description}</p>
                </div>
              </Zoom>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
