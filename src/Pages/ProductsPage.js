import React, { useEffect } from 'react'
import ProductsList from '../Components/ProductsList'

export default function ProductsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ minHeight: '100vh' }}>
            <ProductsList />
        </div>
    )
}
