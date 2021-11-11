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
                <h2 className="text-center">All Products</h2>
                <p className="text-center">Perfume is a mixture of fragrant essential oils or aroma compounds (fragrances), fixatives and solvents, usually in liquid form, used to give the human body.</p>
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