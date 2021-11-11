import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        if (data.review <= 5 && data.review >= 0) {
            fetch('http://localhost:5000/review', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Review Added Successfully Done!!!')
                    reset();
                })
        } else {
            alert('Invalid Review Number');
            reset();
        }


    }
    return (
        <Container className="my-5">
            <Row>

                <Col>
                    <h1>Add A Review</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input placeholder="Customer Name" className="w-100 form-control mb-3" type="text" {...register("name")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Your Comment" className="w-100 form-control mb-3" type="text" {...register("description", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Review Number max-5" className="w-100 form-control mb-3" type="number" {...register("review", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input required placeholder="customer Image URL" className="w-100 form-control mb-3" type="text" {...register("image", { required: true })} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">
                            Add A Review
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>

    );
};

export default Review;