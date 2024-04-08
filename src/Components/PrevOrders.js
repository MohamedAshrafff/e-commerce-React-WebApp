import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function PrevOrders(props) {
    const orders = props.orders
    const randomNumber = Math.floor(Math.random() * 1000000000)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const ordersList = orders.map((order, index) => {
        const totalPrice = order[0].reduce((accumaltor, ord) => accumaltor += (ord.price * ord.quantity), 0)
        const totalItems = order[0].reduce((accumaltor, ord) => accumaltor += (ord.quantity), 0)

        return (
            <Link style={{ textDecoration: 'none', color: 'black', ...styles.size }}>
                <div key={index} className='mx-2 mt-3 d-flex justify-content-between align-items-center'>
                    <div className='d-flex text-center flex-column justify-content-around'>
                        <span className='text-danger'>{(randomNumber + (index))}</span>
                        <span className='text-muted' style={styles.dateStyle}>({order[1][0].date})</span>
                    </div>
                    <div className=''>
                        <p>
                            {totalItems} Item{totalItems > 1 ? 's' : ''}
                            {/* <ul>
                            {order.map((item) => {
                                return <li className='text-dark'>{item.title} </li>
                            })}
                        </ul> */}
                        </p>
                    </div>
                    <p className='text-danger'>${totalPrice.toFixed(2)}</p>
                </div>

            </Link>
        )
    })

    return (
        <div>
            <h1 className='fs-1 fw-bold text-center mb-5'>Previous Orders</h1>
            <Container>
                <div className='mx-2 mt-3 d-flex justify-content-between align-items-center'>
                    <p>Order ID</p>
                    <p>INFO</p>
                    <p>TOTAL</p>
                </div>
                <hr className='mt-0' />
                {ordersList}
            </Container>
        </div>
    )
}


const styles = {
    dateStyle: {
        fontSize: 'clamp(12px, 2vw, 14px)'
    },
    size: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)'
    },
}