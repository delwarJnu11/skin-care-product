import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>



                <img
                    style={{ height: "540px" }}
                    className="d-block w-100 img-fluid"
                    src="https://i.ibb.co/yQV8zSQ/cos-3.webp"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "540px" }}
                    className="d-block w-100 img-fluid"
                    src="https://i.ibb.co/b5phPz5/Cosmetics-beauty-product-bottle-mockup-banner-on-gold-background-with-liquid-droplets-splash-Skin-ca.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "540px" }}
                    className="d-block w-100 img-fluid"
                    src="https://i.ibb.co/ncxDsrT/cos-1.webp"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}


export default Slider;