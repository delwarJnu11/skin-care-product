import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { title, image, description, price, _id } = product;
    return (
        <Col>
            <Card className="h-100 text-center">
                <div className="card-image">
                    <img src={image} alt="" className="img-fluid" />
                </div>
                <Card.Body>
                    <Card.Title className="product-title">{title}</Card.Title>
                    <Card.Text className="product-desc">{description.slice(0, 225)}</Card.Text>
                    <h5 className="product-price">Price: ${price}</h5>
                </Card.Body>
                <Card.Footer className="card-footer">

                    <Link to={`purchase/${_id}`}>
                        <Button className="w-100 buy-now-button" variant="success">Buy Now</Button>
                    </Link>
                </Card.Footer>

            </Card>
        </Col>
    );
};

export default Product;