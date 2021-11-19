import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);

        axios.post('http://localhost:5000/products', data)
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
                <h2 className="m-5 text-danger">Please Add Product</h2>
                <div className="row mt-3 mb-5 shadow  rounded">
                    <div className="col-md-6">
                        {/* <img className="img-fluid" src={addPackage} alt="" /> */}
                    </div>
                    <div className="col-md-6">
                        <h3 className="m-4 text-danger">Please Fill This Form</h3>
                        <form className="d-flex flex-column justify-content-center align-items-center bg-light pt-5" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-75 mb-2" {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
                            <textarea className="w-75 mb-2" {...register("description")} placeholder="Description" />
                            <input className="w-75 mb-2" type="number" {...register("price")} placeholder="Price" />
                            <input className="w-75 mb-2" {...register("img")} placeholder="image url" />
                            <input className="btn btn-danger w-25 mb-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;