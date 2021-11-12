import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../HomePage/Product/Product';
import useProducts from '../hooks/useProducts';
import Navigation from '../Shared/Navigation/Navigation';

const AllProducts = () => {
    const { products } = useProducts();
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5">
                <div className="text-center">
                    <h3 className="featured-products">All Products</h3>
                    <p className="featured-desc">Our product range includes Skin Whitening And Fairness Cream, Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair Conditioner, Chocolate Coffee Face Wash</p>
                </div>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllProducts;