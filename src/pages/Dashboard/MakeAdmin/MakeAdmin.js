import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        const value = e.target.value;
        setEmail(value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://aqueous-headland-20812.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin made successfull done')
                }
            })

        e.preventDefault()
    }
    return (
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <form onSubmit={handleAdminSubmit}>
                        <Row>
                            <Col>
                                <input
                                    onBlur={handleOnBlur}
                                    placeholder="Email"
                                    className="w-100 form-control mb-3"
                                />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">
                            Make an Admin
                        </Button>
                    </form>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;