import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const { products } = useProducts();
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col sm={12} md={2}></Col>
                    <Col sm={12} md={8}>
                        <div className="text-center">
                            <h3 className="featured-products">Featured Products</h3>
                            <p className="featured-desc">Our product range includes Skin Whitening And Fairness Cream, Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair Conditioner, Chocolate Coffee Face Wash</p>
                        </div>
                    </Col>
                    <Col sm={12} md={2}></Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-4">
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Products;