import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import swal from 'sweetalert';
import Footer from '../Shared/Footer/Footer';
import { FaMinus, FaPlus } from 'react-icons/fa';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [updatePrice, setUpdatePrice] = useState(product?.size1?.price);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://aqueous-headland-20812.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setUpdatePrice(data?.size1?.price)
            });
    }, [id]);



    //Product Quantity Decrease
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }
    //Product Quantity Increase
    const handleIncrease = () => {
        setQuantity(quantity + 1)
    };
    const total = updatePrice * quantity;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = user.displayName;
        data.status = "pending";
        data.product = product;
        data.total = total;
        data.quantity = quantity;
        swal("Good job!", "You Purchased the product successfully!", "success");
        reset();
        history.push('/dashboard/myOrders');
        fetch('https://aqueous-headland-20812.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    };
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-4">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <div>
                            <InnerImageZoom
                                src={product?.image}
                                zoomSrc={product?.image}
                                zoomType="hover"
                                zoomPreload={true}
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <h1 className="purchase-title">{product?.title}</h1>
                        <p className="purchase-desc">{product?.description}</p>
                        {!product?.size1?.price ? <Spinner variant="success" border="animation"></Spinner> :
                            <h6 className="product-price">Price: ${updatePrice}</h6>
                        }
                        <div className="my-3">
                            <span>Size: </span>
                            <Button onClick={() => setUpdatePrice(product?.size1?.price)} className="size-button" variant="outline">{product?.size1?.size} </Button>
                            <Button onClick={() => setUpdatePrice(product?.size2.price)} className="size-button" variant="outline"> {product?.size2?.size} </Button>
                            <Button onClick={() => setUpdatePrice(product?.size3?.price)} className="size-button" variant="outline"> {product?.size3?.size} </Button>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="me-3">Quantity: </span>
                            <div className="d-flex align-items-center quantity-wrapper">
                                <Button onClick={handleDecrease} className="quantity-button" variant="outline"> <FaMinus /> </Button>
                                <input className="quantity-input" readOnly type="text" value={quantity} />
                                <Button onClick={handleIncrease} className="quantity-button" variant="outline"><FaPlus /></Button>
                            </div>
                        </div>
                        <h5 className="product-price my-3">Total Price: ${total}</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3 input-field" defaultValue={user?.displayName} {...register("name")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3 input-field" defaultValue={user?.email} {...register("email", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Address" className="w-100 form-control mb-3 input-field" {...register("address", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Phone" className="w-100 form-control mb-3 input-field" {...register("phone", { required: true })} />
                                </Col>
                            </Row>
                            <Button className="buy-now-button" type="submit">
                                Place Order
                            </Button>
                        </form>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default Purchase;