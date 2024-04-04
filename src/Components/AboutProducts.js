import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Texts from '../Assets/Other/Texts'
import cat from '../Assets/Images/cat.jpg'
import product from '../Assets/Images/products.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getCategories } from '../Redux/Slices/products-slice'
export default function AboutProducts() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.products.categories)
    const items = useSelector(state => state.products.items)
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getCategories())
    }, [])
    return (
        <Container>
            <Row >
                <div className="col-12 text-start mt-5">
                    <h2 className='text-danger fw-bold'>Professional Sponsors</h2>
                    <p className="">{Texts.aboutParagraph}</p>
                </div>
                <div className="col-md-6 col-12 text-start mt-5">
                    <img className='text-danger' src={product} style={styles.img} />
                    <p className="fs-2 text-center mt-3">Products</p>
                    <p className="fs-1 text-center text-danger">{items.length}</p>
                </div>
                <div className="col-md-6 col-12 text-start mt-5">
                    <img className='text-danger ' src={cat} style={styles.img} />
                    <p className="fs-2 text-center mt-3">Categories</p>
                    <p className="fs-1 text-center text-danger">{categories.length}</p>
                </div>
            </Row>
        </Container>
    )
}

const styles = {
    img: {
        height: '300px',
        objectFit: 'cover',
        width: '100%',
    }
}