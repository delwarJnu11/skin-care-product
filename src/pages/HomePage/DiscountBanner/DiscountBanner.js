import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './DiscountBanner.css';
import discount from '../../../images/offer.png';
import treeLeaf from '../../../images/leaf.png';

const DiscountBanner = () => {
    return (
        <Container fluid className="banner-bg my-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col sm={12} md={1}>
                </Col>
                <Col sm={12} md={5} className="banner-text-area">
                    <div>
                        <img width="150px" src={discount} alt="" className="img-fluid" />
                    </div>
                    <div className="text-wrapper">
                        <h2 className="discount-title">Skin Care</h2>
                        <p className="discount-desc">Clean your face no more than twice a day, or just once, if you have dry skin and don't wear makeup. </p>
                        <Button className="discount-button">Learn More</Button>
                    </div>
                    <div>
                        <img src={treeLeaf} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                </Col>
            </Row>
        </Container>
    );
};

export default DiscountBanner;