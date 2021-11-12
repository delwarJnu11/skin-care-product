import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import swal from 'sweetalert';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://aqueous-headland-20812.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = user.displayName;
        data.status = "pending";
        data.product = product;
        swal("Good job!", "You Purchased the product successfully!", "success");
        reset();
        history.push('/dashboard/myOrders');
        fetch('https://aqueous-headland-20812.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    };
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-4">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <div>
                            <img variant="top" className="img-fluid" height="600" src={product?.image} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <h1>{product?.title}</h1>
                        <p>{product?.description}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user?.displayName} {...register("name")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user?.email} {...register("email", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Address" className="w-100 form-control mb-3" {...register("address", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Phone" className="w-100 form-control mb-3" {...register("phone", { required: true })} />
                                </Col>
                            </Row>
                            <Button variant="success" type="submit">
                                Place Order
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Purchase;