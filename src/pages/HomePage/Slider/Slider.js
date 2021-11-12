import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: "100vh" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/ZLxF28c/banner-1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "100vh" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/CJh7qh3/banner-2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "100vh" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/HYY0FGL/banner-3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}


export default Slider;