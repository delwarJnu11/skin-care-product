import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaEnvelope, FaLink, FaLock, FaUser } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import registerImage from '../../../images/register.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const SignUp = () => {
    const [register, setRegister] = useState();
    const history = useHistory();
    const location = useLocation();
    const { registerNewUser, signInUsingGoogle, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegister = { ...register };
        newRegister[field] = value;
        setRegister(newRegister);
    };

    //handle Google Sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }


    //handle Register
    const handleRegister = e => {
        registerNewUser(register.email, register.password, register.name, register.photo, history)
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <p>{error}</p>
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={7}>
                        <div>
                            <img src={registerImage} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <h3 className="my-4">Please Registration</h3>
                        <Form onSubmit={handleRegister}>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="name" visuallyHidden>
                                        Your Name
                                    </Form.Label>
                                    <InputGroup className="w-100 mb-2">
                                        <InputGroup.Text>
                                            <FaUser />
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            name="name"
                                            type="name"
                                            id="name"
                                            placeholder="Enter your Name"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="email" visuallyHidden>
                                        Your Email Address
                                    </Form.Label>
                                    <InputGroup className="w-100 mb-2">
                                        <InputGroup.Text>
                                            <FaEnvelope />
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row xs={1} className="mt-2">
                                <Col className="text-start  col-12 col-md-12">
                                    <Form.Label htmlFor="password" visuallyHidden>
                                        Your Password
                                    </Form.Label>
                                    <InputGroup className="mb-2 w-100">
                                        <InputGroup.Text>
                                            <FaLock></FaLock>
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            id="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row xs={1} className="mt-2">
                                <Col className="text-start  col-12 col-md-12">
                                    <Form.Label htmlFor="text" visuallyHidden>
                                        Your Link
                                    </Form.Label>
                                    <InputGroup className="mb-2 w-100">
                                        <InputGroup.Text>
                                            <FaLink />
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            name="image"
                                            type="text"
                                            autoComplete="text"
                                            id="text"
                                            placeholder="Enter your profile link"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Button type="submit" className="mt-2 w-100 login-button">
                                Sign Up
                            </Button>
                        </Form>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signup">
                            <h6 className="my-3 text-center"> New User? Please Register</h6>
                        </NavLink>
                        <div className="text-center">
                            <Button onClick={handleGoogleSignIn} className="login-button"> <FontAwesomeIcon icon={faGoogle} /> Continue With Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default SignUp;