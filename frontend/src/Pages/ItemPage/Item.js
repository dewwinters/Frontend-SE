import React from 'react'
import NavBar from "../../Components/Navbar/Navigation";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { callAPI } from "../../Utils/CallAPI";

const Item = () => {
    const { id }  = useParams();

    const [product, setProduct] = useState(null);

    const getProduct = () => {
        callAPI(`/ProductPage/Product.json`)
        .then((productResults) => {
            setProduct(productResults[id]);
        });
    }

    useEffect(() => {
        getProduct();
    }, []);

    if (!product?.name) return <h1>Loading Product ...</h1>;

    return (
        <div>
            <NavBar />
            <div>
                Item Page {product.name}
            </div>
        </div>
    )
}

export default Item