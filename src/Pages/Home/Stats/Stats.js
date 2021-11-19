import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import topCars from '../../../images/stats/topCars.jpg';
import support from '../../../images/stats/support1.jpg';

const Stats = () => {
    return (
        <div className="container">
        <h2 className="text-danger my-md-5">Why Buy From Us</h2>
        <div>
            <CardGroup className="shadow">
                <Card>
                    <Card.Img style={{ height: '300px' }} variant="top" src={topCars} />
                    <Card.Body>
                        <Card.Title>Top Cars We Provide
                        </Card.Title>
                        <Card.Text>
                            We will provide best cars with best value.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img style={{ height: '300px' }} variant="top" src="https://image.freepik.com/free-photo/businessman-handshaking-businesswoman-showing-respect-closeup-view-hands-shaking_1163-4679.jpg" />
                    <Card.Body>
                        <Card.Title>World Class Service
                        </Card.Title>
                        <Card.Text>
                            Best services we provide. Our services are world class.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img style={{ height: '300px' }} variant="top" src={support} />
                    <Card.Body>
                        <Card.Title>Support 24/7
                        </Card.Title>
                        <Card.Text>
                            You will get 24/7 support.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img style={{ height: '300px' }} variant="top" src="https://image.freepik.com/free-photo/best-price-offer-promotion-commerce-marketing-concept_53876-133564.jpg" />
                    <Card.Body>
                        <Card.Title>Best Price Guarantee
                        </Card.Title>
                        <Card.Text>
                            You will get the best price, we guarantee it.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
        <div className="row my-5 shadow py-3">
            <div className="col-md-3">
                <h1><i className="far fa-smile-beam text-danger"></i>
                </h1>
                <h1 className="fw-bold">10,101</h1>
                <h5>Happy Clients</h5>
            </div>
            <div className="col-md-3">
                <h1><i className="fas fa-car text-danger"></i></h1>
                <h1 className="fw-bold">2000</h1>
                <h5>Cars In stock</h5>
            </div>
            <div className="col-md-3">
                <h1><i className="fas fa-trophy text-danger"></i></h1>
                <h1 className="fw-bold">155</h1>
                <h5>Awards</h5>
            </div>
            <div className="col-md-3">
                <h1><i className="far fa-comments text-danger"></i></h1>
                <h1 className="fw-bold">15,876</h1>
                <h5>Support Cases</h5>
            </div>
        </div>
    </div>
    );
};

export default Stats;