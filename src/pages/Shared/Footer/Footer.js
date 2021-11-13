import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import payment from '../../../images/payment.png';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <div className="footer-bg pt-5">

            <Container>

                <Row>
                    <Col md={4}>
                        <Zoom>
                            <h1 className="fs-2 fw-bold text-white my-3">SKIN CARE</h1>
                            <div className="mt-3 footer-text">
                                <p>Clean your face no more than twice a day, or just once, if you have dry skin and don't wear makeup.</p>
                            </div>
                            <p className="mt-3">
                                <FaFacebookF className="icon" />
                                <FaTwitter className="icon" />
                                <FaYoutube className="icon" />
                            </p>
                        </Zoom>
                    </Col>
                    <Col md={2}>
                        <Zoom>
                            <h3 className="my-3 text-white title">Category</h3>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Perfume</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column  mt-2 footer-menu" to="/home">Makeup</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">EyeShadow</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Organic Oil</NavLink>
                        </Zoom>
                    </Col>

                    <Col md={3}>
                        <Zoom>
                            <h3 className="my-3 title">Address</h3>
                            <p className="footer-menu"><FaMapMarkedAlt className="fs-6" /> <span className="ms-2">200, D-block, Gulshan</span></p>
                            <p className="footer-menu"><FaPhoneAlt className="fs-6" /> <span className="ms-2">+880 1749497676</span></p>
                            <p className="footer-menu"><FaEnvelope className="fs-6" /> <span className="ms-2">skin-care@gmail.com</span></p>
                        </Zoom>
                    </Col>


                    <Col md={3}>
                        <Zoom>
                            <h3 className="my-3 title">We Accept Payment</h3>
                            <div className="my-3">
                                <img className="img-fluid" src={payment} alt="" />
                            </div>
                        </Zoom>
                    </Col>

                </Row>
            </Container>
            <hr />
            <p className="text-center m-0 pb-3 footer-text">All Right Reserved &copy; Skin Care </p>

        </div >
    );
};

export default Footer;