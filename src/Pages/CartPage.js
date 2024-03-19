import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeFromCart } from '../Redux/Slices/cart-slice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartPage() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const cartItems = cart.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img style={{ height: 100, width: 100 }} src={item.image} /></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><Button variant='danger' onClick={() => dispatch(removeFromCart(item))} >Delete</Button></td>
            </tr>
        )
    })

    const totalCartPrice = cart.reduce((accumaltor, item) => accumaltor += (item.quantity * item.price), 0)
    return (
        <Container>
            <h1 className='py-5'>CartPage</h1>
            {
                cartItems.length == 0 ? <h1> Cart is empty add items to your cart!!</h1> :
                    <>
                        <Button className='mb-5' variant='primary' onClick={() => dispatch(clearCart())} >Clear Cart</Button>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Img</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems}
                            </tbody>
                        </Table>
                        <h1>Total Cart : {totalCartPrice.toFixed(2)}</h1>
                    </>
            }
        </Container>
    )
}
