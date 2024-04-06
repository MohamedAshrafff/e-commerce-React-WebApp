import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductFullDetails from '../Components/ProductFullDetails';
import LoadingSpinner from '../Components/MainComponents/LoadingSpinner';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))

        window.scrollTo(0, 0)
    }, [params.productId]);

    return (
        <div style={{ minHeight: '100vh' }}>
            {!product.id ?
                <div className='d-flex justify-content-center mt-5'><LoadingSpinner /></div>
                : <ProductFullDetails product={product} />
            }
        </div>
    )
}
