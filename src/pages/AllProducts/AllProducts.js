import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Product from '../HomePage/Product/Product';
import useAuth from '../hooks/useAuth';
import useProducts from '../hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AllProducts = () => {
    const { products } = useProducts();
    const { isLoading } = useAuth();
    //spinner
    if (isLoading) {
        return <div className="text-center">
            <Spinner variant="success" animation="border"></Spinner>
        </div>
    }
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row>
                    <Col sm={12} md={2}></Col>
                    <Col sm={12} md={8}>
                        <div className="text-center">
                            <h3 className="featured-products">All Products</h3>
                            <p className="featured-desc">Our product range includes Skin Whitening And Fairness Cream, Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair Conditioner, Chocolate Coffee Face Wash</p>
                        </div>
                    </Col>
                    <Col sm={12} md={2}></Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;