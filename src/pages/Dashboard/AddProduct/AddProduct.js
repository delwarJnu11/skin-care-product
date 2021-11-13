import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        swal("Good job!", "Your product added successfully done!", "success");
        reset();
        fetch('https://aqueous-headland-20812.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <Container className="my-5">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="dashboard-title">Add A Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input placeholder="Title" className="w-100 form-control mb-3" {...register("title")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Description" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Price" className="w-100 form-control mb-3" {...register("price", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input required placeholder="Image Url" className="w-100 form-control mb-3" {...register("image", { required: true })} />
                            </Col>
                        </Row>
                        <Button className="dashboard-button" type="submit">
                            Add Product
                        </Button>
                    </form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>

    );
};

export default AddProduct;