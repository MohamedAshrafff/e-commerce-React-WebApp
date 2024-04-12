import React, { useEffect } from 'react'
import { Container, } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import CartProduct from '../Components/CartProduct';
export default function OrderSummary() {

    const order = useSelector(state => state.orders.order);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const orderItems = order.map((item) => {
        return (
            <CartProduct key={item.id} item={item} isOrder={true} />
        )
    })
    const totalOrderPrice = order.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <Container style={{ minHeight: '100vh' }}>
            <p className='fs-1 py-5 text-center '>Order Summary</p>
            {
                <>
                    <div className='container'>
                        <div className='mx-2 mt-3 d-flex justify-content-between align-items-center'>
                            <p>PRODUCT</p>
                            <p>INFO</p>
                            <p>TOTAL</p>
                        </div>
                        <hr className='mt-0' />
                        {orderItems}
                        <p className='fs-2 text-center text-danger'><span className='text-dark'>Order Total : </span>${totalOrderPrice.toFixed(2)}</p>
                    </div>
                </>
            }
        </Container>
    )
}
