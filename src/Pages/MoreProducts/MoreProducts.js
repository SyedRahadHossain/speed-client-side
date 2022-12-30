import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Product from '../Home/Product/Product';




const MoreProducts = () => {
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
        <div id="moreProducts">
            <Header></Header>
            <div id="moreProducts" className="container">
                <h2 className="text-danger my-5">Our Cars Collection</h2>
                <Row xs={1} md={2} className="g-4 mb-5">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MoreProducts;