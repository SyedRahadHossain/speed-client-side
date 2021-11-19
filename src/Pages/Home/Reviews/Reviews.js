import React, { useEffect, useState } from 'react';
import { Card, Carousel, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch("https://radiant-wave-84161.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                // console.log(data)
            })
        // .catch(err => {
        //     throw new Error(err)
        // })
    }, []);

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }
    return (
        <div className='container'>
            <h2 className="text-danger m-5">Clients Reviews</h2>
            <Carousel variant="dark" fade
                className="my-5 p-5 shadow d-flex justify-content-center">
                {reviews.map((review) => (
                    <Carousel.Item
                        key={review._id} review={review}>
                        <Card
                            className="d-flex justify-content-center align-items-center border-0"
                            style={{ width: '100%' }}>
                            <Card.Img
                                style={{ width: '150px', borderRadius: '50%' }}
                                className="border border-3 border-danger"
                                variant="top"
                                src={review.img} />
                            <Card.Body>
                                <Card.Title className="text-danger fw-bold fs-1">"</Card.Title>
                                <Card.Text
                                    className="px-md-5 fst-italic"
                                >
                                    "{review.review}"
                                </Card.Text>
                                <Card.Text
                                    className="px-md-5 text-danger fw-bold "
                                >
                                    - {review.name}
                                </Card.Text>
                                <Card.Text className="fw-bold ">
                                    <span className="">Rating:</span> {review.rating}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;