import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';




const Products = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch("https://speed-fe2n.onrender.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
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
        <div id="products" className="container">
            <h2 className="text-danger my-5">Our Top Six Cars</h2>
            <Row xs={1} md={2} className="g-4 mb-5">
                {products.slice(0, 6).map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </Row>
        </div>
    );
};

export default Products;