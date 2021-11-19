import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description,price, img } = product;
    return (
        <Col>
            <Card className="shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="px-2">{description}</Card.Text>
                    <Card.Text className="fw-bold">Price: ${price} Million</Card.Text>
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn btn-danger">BUY {name}</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;