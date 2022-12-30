import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import review from '../../../images/review.jpg';


const GiveReview = () => {
    const { user } = useAuth();


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);

        axios.post('https://speed-fe2n.onrender.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="container">
                <h2 className="m-5 text-danger">Please Give Us Review</h2>
                <div className="row mt-3 mb-5 shadow  rounded">
                    <div className="col-md-6">
                        <img className="img-fluid" src={review} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="m-4 text-danger">Please Fill This Form</h3>
                        <form className="d-flex flex-column justify-content-center align-items-center bg-light pt-5" onSubmit={handleSubmit(onSubmit)}>

                            <input className="mb-3 w-75" defaultValue={user.displayName} {...register("name")} />

                            <input className="mb-3 w-75 " defaultValue={user.email} {...register("email", { required: true })} />

                            <textarea className="w-75 mb-2" {...register("review", { required: true })} placeholder="Write Review" />

                            <input className="w-75 mb-2" type="number" {...register("rating")} placeholder="Give Rating 1 to 5" />

                            <input className="w-75 mb-2" {...register("img")} placeholder="image url" />

                            <input className="btn btn-danger w-25 mb-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveReview;