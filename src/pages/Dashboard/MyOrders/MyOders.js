import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const MyOders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://skin-care-server.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        const filterByUser = data.filter((order) => order.email === user.email);
        setOrders(filterByUser);
      });
  }, [user.email, orders]);
  //handle delete product
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to Delete this Product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your product has been deleted!", {
          icon: "success",
        });
        fetch(`https://aqueous-headland-20812.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingOrders = orders.filter(
                (order) => order._id !== id
              );
              setOrders(remainingOrders);
            }
          });
      } else {
        swal("Your Product is safe!");
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.product.title}</td>
                  <td>{order.name}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button
                      title="Delete"
                      variant="danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyOders;
