import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-headland-20812.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

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
                    fetch(`https://aqueous-headland-20812.herokuapp.com/orders/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                const remainingOrders = orders.filter(order => order._id !== id)
                                setOrders(remainingOrders);
                            }
                        })
                } else {
                    swal("Your Product file is safe!");
                }
            });

    }

    // update
    const handleUpdate = id => {
        const updatedOrder = { ...orders };

        updatedOrder.status = "Shipped";

        fetch(`https://aqueous-headland-20812.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Order Successfully Shipped!", "success");
                }
            })
    }

    return (
        <Container>
            <Row>
                <h1 className="dashboard-title text-center">Total Orders {orders.length}</h1>
                <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Product Name</th>
                                <th>Customer Name</th>
                                <th>Price</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.product.title}</td>
                                    <td>{order.name}</td>
                                    <td>{order.product.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <Button title="confirm to shipping" className="me-1" variant="success" onClick={() => handleUpdate(order._id)}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </Button>
                                        <Button title="Delete" variant="danger" onClick={() => handleDelete(order._id)}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </td>

                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageAllOrders;