import React from 'react'
import { Button, Container, } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import CartProduct from '../Components/CartProduct';
export default function CartPage() {
    const cart = useSelector((state) => state.lists.cart)
    const dispatch = useDispatch();
    const cartItems = cart.map((item) => {
        return (
            <CartProduct key={item.id} item={item} />
        )
    })

    const totalCartPrice = cart.reduce((accumaltor, item) => accumaltor += (item.quantity * item.price), 0)
    return (
        <Container>
            <p className='fs-1 py-5 text-start'>Your cart</p>
            {
                cartItems.length == 0 ? <h1> Cart is empty add items to your cart!!</h1> :
                    <>
                        <div className='container'>
                            <div className='mx-5 mt-3 d-flex justify-content-between align-items-center'>
                                <p>PRODUCT</p>
                                <p>TOTAL</p>
                            </div>
                            <hr className='mt-0' />
                            {cartItems}
                        </div>
                        <p className='fs-2'>Total Cart :$ {totalCartPrice.toFixed(2)}</p>
                    </>
            }
        </Container>
    )
}
