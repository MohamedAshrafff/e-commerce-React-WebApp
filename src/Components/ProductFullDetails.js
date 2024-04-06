import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavourites } from '../Redux/Slices/cart-slice';
import { setCategory } from '../Redux/Slices/products-slice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function ProductFullDetails(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cart = useSelector(state => state.lists.cart)
    const isFound = cart.find((item) => item.id === product.id)
    const onCategoryClick = (category) => {
        dispatch(setCategory(category))
        navigate('/products')
    }

    const onActionBtnClick = (product) => {
        if (isFound) navigate('/cart')
        else {
            dispatch(addToCart(product))
            Swal.fire({
                title: "Item Added Successfully!",
                text: "Do you want to continue shopping or complete checkout?",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "green",
                confirmButtonText: "Continue Shopping",
                cancelButtonText: "Complete Checkout",
            }).then((result) => {
                if (!result.isConfirmed) navigate('/cart')
            });
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6  d-flex justify-content-center align-items-center mb-3'>
                    <img src={product.image} alt="Product" className="img-fluid "
                        style={{
                            height: '50vh',
                            objectFit: 'cover'
                        }} />
                </div>
                <div className='col-md-6 text-center'>
                    <h1>{product.title}</h1>

                    <h3 className='btn btn-outline active mb-3' onClick={() => { onCategoryClick(product.category) }}>{product.category}</h3>
                    <p>{product.description}</p>
                    {/* {product.rating && <h3>Rating: {product.rating.rate} ({product.rating.count})</h3>} */}
                    <h3 >Price: <span className='fw-bold'>${product.price}</span></h3>
                    <hr />
                    <div className='row justify-content-around mt-5'>
                        <button className={`col-6 btn mb-5 ${isFound ? `btn-success` : `btn-danger`}`} onClick={() => onActionBtnClick(product)}>{isFound ? `Already Added! Proceed to Checkout` : `Add to Cart`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
