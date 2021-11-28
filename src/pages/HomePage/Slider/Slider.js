import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner1">
                <Carousel.Caption className="banner-text" >
                    <Fade right>
                        <Row>
                            <Col md={7}>

                                <h5 >Organic Shop</h5>
                                <p>The Skin is very delicate as well as sensitive so you should take care of skin with the best products. Products are specially designed for the skin</p>

                                <button className="sliderButton">Learn More</button>
                                <button className="sliderButton">Shop Now</button>
                            </Col>
                            <Col md={5}> </Col>
                        </Row>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner2">
                <Carousel.Caption className="banner-text" >
                    <Fade left>
                        <Row>
                            <Col md={7}>
                                <h5>Natural Mask</h5>
                                <p>The Skin is very delicate as well as sensitive so you should take care of skin with the best products. Products are specially designed for the skin</p>

                                <button className="sliderButton">Learn More</button>
                                <button className="sliderButton">Shop Now</button>
                            </Col>
                            <Col md={5}>

                            </Col>
                        </Row>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner3">
                <Carousel.Caption className="banner-text" >
                    <Fade left>
                        <Container fluid>
                            <Row>
                                <Col md={8}>
                                    <h5>Relaxing Facial</h5>
                                    <p>The Skin is very delicate as well as sensitive so you should pamper the skin with the best products. The Products are specially designed for the skin.</p>

                                    <button className="sliderButton">Learn More</button>
                                    <button className="sliderButton">Shop Now</button>
                                </Col>
                                <Col md={4}>

                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default Slider;