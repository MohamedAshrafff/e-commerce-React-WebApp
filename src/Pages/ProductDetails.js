import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Components/Product';
import ProductFullDetails from '../Components/ProductFullDetails';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <>
            <ProductFullDetails product={product} />
            {/* <Product product={product} showButton={false} /> */}
        </>
    )
}
