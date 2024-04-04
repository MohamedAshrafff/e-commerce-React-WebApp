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
    const filters = ['lowest', 'highest', 'rating']
    const [items, setItems] = useState({ data: [...newItems], filter: 'random' })

    const handleFilter = (filter) => {
        const clone = filter === 'lowest' ? items.data.sort((a, b) => a.price - b.price) : filter === 'highest' ? items.data.sort((a, b) => b.price - a.price) : filter === 'rating' ? items.data.sort((a, b) => b.rating.rate - a.rating.rate) : newItems
        console.log(clone)
        setItems({ data: [...clone], filter: filter })
    }

    const newArrivals = items.data.map((product) => {
        return (
            <Product key={product.id} className='w-auto' product={product} />
        )
    })
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        setItems({ data: [...newItems], filter: 'random' })
    }, [newItems])
    const filterButtons = filters.map((filter) => {
        return (
            <button key={filter} className={`btn btn-outline-danger ${items.filter === filter ? 'active' : ''} w-auto`} onClick={() => { handleFilter(filter) }}>{`By ${filter} ${filter !== 'rating' ? 'price' : ''} `}</button>
        )
    })
    return (
        <Container>
            <div className='text-center d-flex justify-content-evenly w-auto'>
                {filterButtons}
            </div>
            {isLoading ?
                <div className='d-flex justify-content-center mt-5 '> < LoadingSpinner /> </div>
                :
                <Row md={2} lg={3} xs={1} className='mt-4 g-3 justify-content-around w-auto'>
                    {newArrivals}
                </Row>
            }
        </Container>
    )
}
