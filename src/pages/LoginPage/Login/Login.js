import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const [loginData, setLoginData] = useState();
    const { loginUser, resetPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }
    //handle emaill pass login
    const handleEmailSignIn = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    //handle reset pass
    const handleResetPassword = e => {
        resetPassword(loginData.email);
        e.preventDefault()
    }
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={5}>
                        <h3 className="my-4">Please Login</h3>
                        <Form onSubmit={handleEmailSignIn}>
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
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="current-email"
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

                            <div className="d-flex justify-content-between">
                                <Button type="submit" variant="success" className="mt-2 w-50">
                                    Login
                                </Button>
                                <Button type="reset" variant="danger" onClick={handleResetPassword} className="mt-2 ms-2 w-50">
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col sm={12} md={7}>
                        <div>
                            <img className="img-fluid" src={login} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;