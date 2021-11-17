import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
import { BsCart4 } from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';

const Product = ({ product }) => {
    const { title, image, description, price, _id } = product;
    return (
        <Col>
            <Zoom>
                <Card className="h-100 text-center">
                    <div className="card-image">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <Card.Body>
                        <Card.Title className="product-title">{title}</Card.Title>
                        <Card.Text className="product-desc">{description.slice(0, 200)}</Card.Text>
                        <h5 className="product-price">Price: ${price}</h5>
                    </Card.Body>
                    <Card.Footer className="card-footer">

                        <Link to={`purchase/${_id}`}>
                            <Button className="w-100 buy-now-button"><BsCart4 style={{ fontSize: "20px" }} /> Buy Now</Button>
                        </Link>
                    </Card.Footer>

                </Card>
            </Zoom>
        </Col>
    );
};

export default Product;