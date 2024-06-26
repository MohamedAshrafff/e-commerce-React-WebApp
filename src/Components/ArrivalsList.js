import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { getAllProducts } from '../Redux/Slices/products-slice'
import LoadingSpinner from './MainComponents/LoadingSpinner'

export default function ArrivalsList() {
    const newItems = useSelector((state) => state.products.items)
    const isLoading = useSelector((state) => state.products.loading)
    const dispatch = useDispatch()
    const [items, setItems] = useState({ data: [...newItems], filter: 'random' })

    const handleFilter = (filter) => {
        const clone = filter === 'Low to High' ?
            items.data.sort((a, b) => a.price - b.price) : filter === 'High to Low' ?
                items.data.sort((a, b) => b.price - a.price) : filter === 'Rating' ?
                    items.data.sort((a, b) => b.rating.rate - a.rating.rate) : newItems

        setItems({ data: [...clone], filter: filter })
    }

    const newArrivals = items.data.map((product) => {
        return (
            <Product key={product.id} className='w-auto' product={product} />
        )
    })
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(() => {
        setItems({ data: [...newItems], filter: 'random' })
    }, [newItems])

    return (
        <Container>
            <p className='fs-1 pt-5 text-center text-danger'>New Arrivals!</p>
            <div className='text-center d-flex justify-content-center w-auto'>
                <div className="btn-group ">
                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {items.filter === 'random' ? 'Filter By' : 'Filter by ' + items.filter}
                    </button>
                    <ul className="dropdown-menu ">
                        <li><span className="dropdown-item" onClick={() => { handleFilter('High to Low') }}>High To Low Price</span></li>
                        <li><span className="dropdown-item" onClick={() => { handleFilter('Low to High') }}>Low to High Price</span></li>
                        <li><span className="dropdown-item" onClick={() => { handleFilter('Rating') }}>Rating</span></li>
                    </ul>
                </div>
            </div>
            {isLoading ?
                <div className='d-flex justify-content-center mt-5 '> < LoadingSpinner /> </div>
                :
                <>
                    <Row md={2} lg={3} xs={1} className='mt-4 g-3 justify-content-around w-auto'>
                        {newArrivals}
                    </Row>
                </>
            }
        </Container>
    )
}
