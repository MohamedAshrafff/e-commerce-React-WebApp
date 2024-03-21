import { useEffect, useState } from 'react'
import Product from "./Product"
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Redux/Slices/products-slice';

export default function ProductsList() {
    const api_URL = "https://fakestoreapi.com/products";
    const products = useSelector((state) => state.products)
    const [categories, setCategories] = useState([])
    console.log(products);

    const dispatch = useDispatch()

    const getCategories = () => {
        fetch(`${api_URL}/categories`)
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }

    const getProductsInCategory = (catName) => {
        fetch(`${api_URL}/category/${catName}`)
            .then((response) => response.json())
            .then(data => console.log(data))

    }
    useEffect(() => {
        dispatch(getAllProducts())
        getCategories()
    }, [])

    const productsCards = products.map((prod) => {
        return (
            <div key={prod.id} className="col-md-6 col-xl-3  w-auto" style={{ marginBottom: "5%" }}>
                <Product product={prod} showButton={true} />
            </div>
        )
    })

    return (
        <>
            {/* <button className="btn btn-info" onClick={() => { getProducts() }} style={{ margin: "0.5%" }}>
                ALL
            </button> */}
            <div className='container mt-5'>
                <h2>Categories</h2>
                <div className='row justify-content-center mt-5 p-2'>
                    {categories.map((cat) => {
                        return (
                            <button className="btn btn-outline-dark col w-auto" key={cat} onClick={() => { getProductsInCategory(cat) }} style={{ margin: "0.5%" }}>
                                {cat}
                            </button>)
                    })}
                </div>
            </div>
            {
                products.length === 0 ? <h1>LOADING!</h1>
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