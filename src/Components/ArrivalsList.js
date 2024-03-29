import React from 'react'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { getAllProducts } from '../Redux/Slices/products-slice'
import LoadingSpinner from './LoadingSpinner'

export default function ArrivalsList() {
    const items = useSelector((state) => state.products.items)
    const isLoading = useSelector((state) => state.products.loading)
    const dispatch = useDispatch()
    const newArrivals = items.map((product) => {
        return (
            <Product key={product.id} className='w-auto' product={product} />
        )
    })
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <Container>
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
