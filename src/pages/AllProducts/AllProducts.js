import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Col, Container, Row, } from 'react-bootstrap';
import Product from '../HomePage/Product/Product';
import useProducts from '../hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import ScaleLoader from "react-spinners/ScaleLoader";

const AllProducts = () => {
    const { products } = useProducts();

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
                {
                    products.length > 0 ? <Row xs={1} md={3} className="g-4 mt-5">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </Row> : <div className="text-center">
                        <ScaleLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
                    </div>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;