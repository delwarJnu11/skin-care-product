import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.review <= 5 && data.review >= 0) {
      fetch("https://skin-care-server.vercel.app/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Good job!", "Review Added Successfully Done!", "success");
          reset();
        });
    } else {
      alert("Invalid Review Number");
      reset();
    }
  };
  return (
    <Container className="my-5">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <h1 className="dashboard-title">Add A Review</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <input
                  placeholder="Customer Name"
                  className="w-100 form-control mb-3"
                  defaultValue={user.displayName}
                  type="text"
                  {...register("name")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="Customer Email"
                  className="w-100 form-control mb-3"
                  defaultValue={user.email}
                  type="text"
                  {...register("email")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="Your Comment"
                  className="w-100 form-control mb-3"
                  type="text"
                  {...register("description", { required: true })}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="Review Number max-5"
                  className="w-100 form-control mb-3"
                  type="text"
                  {...register("review", { required: true })}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  required
                  placeholder="customer Image URL"
                  className="w-100 form-control mb-3"
                  type="text"
                  {...register("image", { required: true })}
                />
              </Col>
            </Row>
            <Button className="dashboard-button" type="submit">
              Add A Review
            </Button>
          </form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default Review;
