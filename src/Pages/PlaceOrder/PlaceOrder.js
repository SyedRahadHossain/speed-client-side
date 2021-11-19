import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://radiant-wave-84161.herokuapp.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                // console.log(data);
            })
        // .catch(err => {
        //     throw new Error(err)
        // })
    }, [productId]);

    const onSubmit = data => {
        // console.log(data);

        fetch('https://radiant-wave-84161.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
            .catch(err => {
                throw new Error(err)
            })
    };
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h2 className="text-danger my-3">Car Details</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Card className="my-4">
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>Car name: {product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="fw-bold">Price: ${product.price} million</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-danger mb-4">Place your order</h3>
                        <form className="d-flex flex-column align-items-center bg-light pt-5" onSubmit={handleSubmit(onSubmit)}>

                            <input className="mb-3 w-75" defaultValue="pending" {...register("status")} />

                            {product.name && <input className="mb-3 w-75" defaultValue={product.name} {...register("productName")} />}

                            <input className="mb-3 w-75" defaultValue={user.displayName} {...register("name")} />

                            <input className="mb-3 w-75 " defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input className="mb-3 w-75" placeholder="Address" defaultValue="" {...register("address")} />
                            <input className="mb-3 w-75" placeholder="City" defaultValue="" {...register("city")} />
                            <input className="mb-3 w-75" placeholder="Phone Number" defaultValue="" {...register("phone")} />

                            <input className="btn btn-danger mb-5 w-50" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;