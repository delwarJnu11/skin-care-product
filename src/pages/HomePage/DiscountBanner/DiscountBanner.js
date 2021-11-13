import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './DiscountBanner.css';
import discount from '../../../images/offer.png';
import treeLeaf from '../../../images/leaf.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const DiscountBanner = () => {
    return (
        <Container fluid className="banner-bg">
            <Row>
                <Col sm={12} md={1}>
                </Col>
                <Col sm={12} md={5} className="banner-text-area">
                    <Zoom>
                        <div>
                            <img width="150px" src={discount} alt="" className="img-fluid" />
                        </div>
                    </Zoom>
                    <Fade>
                        <div className="text-wrapper">
                            <h2 className="discount-title">Skin Care</h2>
                            <p className="discount-desc">Clean your face no more than twice a day, or just once, if you have dry skin and don't wear makeup. </p>
                            <Button className="discount-button">Learn More</Button>
                        </div>
                    </Fade>
                    <Zoom>
                        <div>
                            <img src={treeLeaf} alt="" className="img-fluid" />
                        </div>
                    </Zoom>
                </Col>
                <Col sm={12} md={6}>
                </Col>
            </Row>
        </Container>
    );
};

export default DiscountBanner;