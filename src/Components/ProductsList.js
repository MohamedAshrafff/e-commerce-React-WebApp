import { useEffect, useState } from 'react'
import Product from "./Product"
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getCategories, getProductsInCategory } from '../Redux/Slices/products-slice';
import LoadingSpinner from './LoadingSpinner';

export default function ProductsList() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.products.loading)
    const categories = useSelector((state) => state.products.categories)
    const items = useSelector((state) => state.products.items)
    const [data, setData] = useState(items)


    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        setData(items)
    }, [items])
    const productsCards = data.map((prod) => {
        return (
            <div key={prod.id} className="col-md-6 col-xl-3  w-auto" style={{ marginBottom: "5%" }}>
                <Product product={prod} showButton={true} />
            </div>
        )
    })

    const categoriesButtons = categories.map((cat) => {
        return (
            <button className="btn btn-outline-dark col w-auto" key={cat} onClick={() => { dispatch(getProductsInCategory(cat)) }} style={{ margin: "0.5%" }}>
                {cat}
            </button >
        )
    })

    return (
        <>
            <div className='container mt-5'>
                <h2>Browse By Category</h2>
                <div className='text-center'>
                    <button className="btn btn-outline-dark col w-auto" onClick={() => { dispatch(getAllProducts()) }} style={{ margin: "0.5%" }}>
                        ALL
                    </button>
                    {categoriesButtons}
                </div>
            </div>
            {
                isLoading ?
                    <div className='d-flex justify-content-center mt-5'><LoadingSpinner /></div>
                    :
                    <Container className='py-5 text-center'>
                        <Row className='justify-content-center'>
                            {productsCards}
                        </Row>
                    </Container>
            }
        </>
    )
}