import { useEffect, useState } from 'react'
import Product from "./Product"

export default function ProductsList() {
    const api_URL = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])


    const getProducts = () => {
        fetch(api_URL)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }

    const getCategories = () => {
        fetch(`${api_URL}/categories`)
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }

    const getProductsInCategory = (catName) => {
        fetch(`${api_URL}/category/${catName}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))

    }
    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    const productsCards = products.map((prod) => {
        return (
            <div className="col-3" style={{ marginBottom: "0.5%" }}>
                <Product product={prod} showButton={true} />
            </div>
        )
    })

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <button className="btn btn-info" onClick={() => { getProducts() }} style={{ margin: "0.5%" }}>
                ALL
            </button>
            {categories.map((cat) => {
                return (
                    <button className="btn btn-info" key={cat} onClick={() => { getProductsInCategory(cat) }} style={{ margin: "0.5%" }}>
                        {cat}
                    </button>)
            })}
            {
                products.length === 0 ? <h1>LOADING!</h1>
                    :
                    <div className="container">
                        <div className="row">
                            {productsCards}
                        </div>
                    </div>
            }
        </>
    )
}