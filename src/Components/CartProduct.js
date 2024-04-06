import React from 'react'
import { Row } from 'react-bootstrap'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { addToCart, removeFromCart, removeProduct } from '../Redux/Slices/cart-slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default function CartProduct(prod) {
    const product = { ...prod.item };
    const dispatch = useDispatch();


    return (
        <>
            <Row style={styles.size} >
                <div className='col-3 d-flex justify-content-center align-items-center' >
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} style={{ ...styles.imageStyle, ...styles.weight }} alt="product" />
                    </Link>
                </div>
                <div className='col-7 d-flex justify-content-center flex-column'>
                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>{product.title}</Link>
                    <p>Price : <span className='text-danger' style={{ ...styles.weight }}>${product.price}</span></p>
                    <div className='d-flex justify-content-start'>
                        <div>

                            <button style={{ ...styles.btnWidth, ...styles.weight, ...styles.size }}
                                className={`p-0 btn btn-danger text-center ${product.quantity === 1 ? `disabled` : ``} `} onClick={() => { dispatch(removeFromCart(product)) }}>
                                -
                            </button>
                            <span className='mx-3' style={styles.weight}>{product.quantity}</span>
                            <button style={{ ...styles.btnWidth, ...styles.weight, ...styles.size }}
                                className='p-0 btn btn-success' onClick={() => { dispatch(addToCart(product)) }}>
                                +
                            </button>
                        </div>
                        <div>
                            <span className='text-end text-danger lola fs-4 ms-5 ' onClick={() => { dispatch(removeProduct(product)) }}>
                                <RiDeleteBin6Fill />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center col-2'>
                    <p className='text-danger' style={styles.weight}>${(product.price * product.quantity).toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <hr className='mt-3 w-75 align-self-center' />
                </div>
            </Row>
        </>
    )
}


const styles = {
    size: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)'
    },
    weight: {
        fontWeight: '900'
    },
    btnWidth: {
        width: 'clamp(2rem, 2vw, 2.5rem)',
        height: 'clamp(2rem, 2vw, 2.5rem)',
    },
    imageStyle: {
        objectFit: 'cover',
        maxWidth: '100%',
        maxHeight: '18vh'
    }

}