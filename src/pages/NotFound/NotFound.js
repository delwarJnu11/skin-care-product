import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="text-center">
                        <img src={notFound} width="700px" height="300px" alt="" className="img-fluid" />
                    </div>
                    <div className="text-center">
                        <NavLink to="/">
                            <Button variant="danger">
                                Go Back
                            </Button>
                        </NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;