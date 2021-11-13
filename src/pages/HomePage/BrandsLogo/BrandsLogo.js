import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BrandsLogo.css';
const BrandsLogo = () => {
    return (
        <Container fluid>
            <Row className="brandsLogo d-flex justify-content-center align-items-center">
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/PNNFXQm/client-5a.png" alt="" className="img-fluid" />
                </Col>
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/1MpvQ4n/client-8a.webp" alt="" className="img-fluid" />
                </Col>
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/rtPs6vF/client-3a.webp" alt="" className="img-fluid" />
                </Col>
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/bLtqhrC/client-6a.webp" alt="" className="img-fluid" />
                </Col>
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/p04pMgz/client-2.webp" alt="" className="img-fluid" />
                </Col>
                <Col sm={6} md={2}>
                    <img src="https://i.ibb.co/2sjJL7q/client-7a.webp" alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default BrandsLogo;