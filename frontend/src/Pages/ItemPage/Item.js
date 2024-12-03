import React from 'react';
import NavBar from "../../Components/Navbar/Navigation";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { callAPI } from "../../Utils/CallAPI";

const Item = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [product, setProduct] = useState(null);

    const getProduct = () => {
        callAPI(`/Data/Product.json`)
            .then((data) => {
                // Find the product by ID
                const foundProduct = data.Product.find((item) => item.id === id);
                setProduct(foundProduct || null); // Set product or null if not found
            })
            .catch((error) => console.error("Error fetching product:", error));
    };

    useEffect(() => {
        getProduct();
    }, [id]); // Re-run if id changes

    if (!product) return <h1>Loading Product ...</h1>;

    return (
        <div>
            <NavBar />
            <div>
                <h1>Item Page</h1>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "300px" }} />
            </div>
        </div>
    );
};

export default Item;
