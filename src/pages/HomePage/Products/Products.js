import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const { products } = useProducts();
    return (
        <>
            <Container className="my-5">
                <div className="text-center">
                    <h3>Featured Products</h3>
                    <p>Our product range includes Skin Whitening And Fairness Cream, Oxygen Oxygenating Mask, Skin Care Gel, Natural Hair Conditioner, Chocolate Coffee Face Wash</p>
                </div>

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