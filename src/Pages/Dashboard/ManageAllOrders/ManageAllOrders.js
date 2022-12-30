import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('https://speed-fe2n.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => {
                throw new Error(err)
            })
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {

            const url = `https://speed-fe2n.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
                .catch(err => {
                    throw new Error(err)
                })
        }

    }

    return (
        <div>
            <div className="container">
                <h2 className="text-danger my-md-5">Manage All Orders</h2>

                <Row xs={1} md={4} className="g-4 my-4">
                    {
                        orders?.map(order => <Col
                            className="d-flex justify-content-center"
                            key={order._id}>
                            <Card
                                border="danger"
                                style={{ width: '18rem' }}>
                                <Card.Header className="fw-bold">{order?.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{order?.productName}</Card.Title>
                                    <p>
                                        <span className="fw-bold">Address:</span> {order?.address}, {order?.city}
                                    </p>
                                    <p>
                                        <span className="fw-bold">Phone:</span> {order?.phone}
                                    </p>
                                    <p>
                                        <span className="fw-bold">Status:</span> {order?.status}
                                    </p>
                                    <div className="d-flex justify-content-evenly">
                                        <Button className="btn-danger" onClick={() => handleDelete(order?._id)}>Delete</Button>

                                        <Button className="btn-success" >Shipped</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageAllOrders;