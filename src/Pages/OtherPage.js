import React from 'react'
import PrevOrders from '../Components/PrevOrders'
import { Link } from 'react-router-dom'
export default function OtherPage() {
    const orders = [] = localStorage.getItem('Order') ? JSON.parse(localStorage.getItem('Order')) : []
    return (
        <div className='mt-5' style={{ minHeight: '100vh' }}>
            {orders.length === 0 ?
                <>
                    <p className='fs-1 py-5 text-center '>No Previous Orders!</p>
                    <div className='row justify-content-around mt-5 '>
                        <Link to={'/products'} className='btn btn-primary fw-bold col-5 col-md-3 '>Order Now</Link>
                    </div>
                </>
                :
                <PrevOrders orders={orders} />
            }
        </div>
    )
}
