import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductFullDetails from '../Components/ProductFullDetails';
import LoadingSpinner from '../Components/MainComponents/LoadingSpinner';
import HorizontalCarousel from '../Components/HorizontalCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProduct } from '../Redux/Slices/products-slice';

export default function ProductDetails() {
    const isLoading = useSelector((state) => state.products.productLoading)
    const product = useSelector((state) => state.products.product)
    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items)

    useEffect(() => {
        dispatch(getProduct(params.productId))
        dispatch(getAllProducts())
        window.scrollTo(0, 0)
    }, [params.productId]);

    return (
        <div style={{ minHeight: '100vh' }}>
            {isLoading ?
                <div className='d-flex justify-content-center mt-5'><LoadingSpinner /></div>
                :
                <>
                    <ProductFullDetails product={product} />
                    <HorizontalCarousel items={products} />
                </>
            }
        </div>
    )
}
