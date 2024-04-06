import React, { useEffect } from 'react'
import { Container, } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartProduct from '../Components/CartProduct';
import { Link } from 'react-router-dom';
import CheckoutSection from '../Components/CheckoutSection';

export default function CartPage() {

    const cart = useSelector((state) => state.lists.cart)
    const cartItems = cart.map((item) => {
        return (
            <CartProduct key={item.id} item={item} />
        )
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const totalCartPrice = cart.reduce((accumaltor, item) => accumaltor += (item.quantity * item.price), 0)
    return (
        <Container style={{ minHeight: '100vh' }}>
            <p className='fs-1 py-5 text-center '>Your Cart</p>
            {
                cartItems.length === 0 ?
                    <>
                        <h1 className='text-center'> Cart is empty add items to your cart!</h1>
                        <div className='row justify-content-around mt-5 '>
                            <Link to={'/products'} className='btn btn-primary col-5 '>Browse Products</Link>
                        </div>
                    </>
                    :
                    <>
                        <div className='container'>
                            <div className='mx-2 mt-3 d-flex justify-content-between align-items-center'>
                                <p>PRODUCT</p>
                                <p>INFO</p>
                                <p>TOTAL</p>
                            </div>
                            <hr className='mt-0' />
                            {cartItems}
                        </div>
                        <p className='fs-2 text-center text-danger'><span className='text-dark'>Total Cart : </span>${totalCartPrice.toFixed(2)}</p>
                        <CheckoutSection />
                    </>
            }
        </Container>
    )
}
