import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../hooks/useProducts';
import ScaleLoader from "react-spinners/ScaleLoader";

const ManageProducts = () => {
    const { products, setProducts } = useProducts();

    //handle delete product
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "You want to Delete this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your product has been deleted!", {
                        icon: "success",
                    });
                    fetch(`https://aqueous-headland-20812.herokuapp.com/products/${id}`, {
                        method: "DELETE",
                        'content-type': "application/json",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                const remainingProducts = products.filter(product => product._id !== id)
                                setProducts(remainingProducts);
                            }
                        })
                } else {
                    swal("Your Product file is safe!");
                }
            });

    }



    return (
        <>
            {
                products.length > 0 ? <Container>
                    <h1 className="dashboard-title text-center">Total Products {products.length}</h1>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div style={{ overflow: 'scroll' }}>
                                <Table striped bordered hover responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => <tr key={product._id}>
                                                <td>{product._id}</td>
                                                <td> <img width="50px" height="50px" src={product.image} alt="" /> </td>
                                                <td>{product?.title}</td>
                                                <td>${product?.price}</td>
                                                <td>
                                                    <Button title="Delete" variant="danger" onClick={() => handleDelete(product._id)}>
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </Button>
                                                </td>

                                            </tr>)
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container> : <div className="text-center">
                    <ScaleLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
                </div>
            }
        </>
    );
};

export default ManageProducts;