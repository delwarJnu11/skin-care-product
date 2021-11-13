import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../hooks/useProducts';

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
        <Container>
            <Row>
                <h1 className="dashboard-title text-center">Total Products {products.length}</h1>
                <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Image</th>
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
                </Col>
            </Row>
        </Container>
    );
};

export default ManageProducts;