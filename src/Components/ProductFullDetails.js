import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/cart-slice';

export default function ProductFullDetails(props) {
    const { product } = props;
    const dispatch = useDispatch();


    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6  d-flex justify-content-center align-items-center mb-3'>
                    <img src={product.image} alt="Product" className="img-fluid "
                        style={{
                            width: '60%',
                        }} />
                </div>
                <div className='col-md-6 text-center'>
                    <h1>{product.title}</h1>

                    <h3 className='btn btn-outline active mb-3'>{product.category}</h3>
                    <p>{product.description}</p>
                    {/* {product.rating && <h3>Rating: {product.rating.rate} ({product.rating.count})</h3>} */}
                    <h3 >Price: <span className='fw-bold'>${product.price}</span></h3>
                    <hr />
                    <div className='row justify-content-around my-5'>
                        <button className=" col-5 btn btn-danger mb-5" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                        <button className="col-5 btn btn-success mb-5">Add to Favourites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}