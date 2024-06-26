import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCategory, getProductsInCategory } from '../../Redux/Slices/products-slice'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onCategoryClick = (category) => {
        navigate('/products')
        dispatch(setCategory(category))
        dispatch(getProductsInCategory(category))
        window.scrollTo(0, 0)
    }

    const soonFeature = () => {
        alert('This feature will be available soon')
    }

    return (
        <footer className='bg-dark mt-5'>
            <Container >
                <Row className='text-light '>
                    <div className="col-md-4 col-12 text-start mt-5">
                        <h3 className='text-danger fw-bold'>Most Searched</h3>
                        <p className='click-effect' onClick={() => { onCategoryClick('electronics') }}>Electronics</p>
                        <p className='click-effect' onClick={() => { onCategoryClick('jewelery') }}>Jewelery</p>
                        <p className='click-effect' onClick={() => { onCategoryClick("women's clothing") }}>Women's Wear</p>
                    </div>
                    <div className="col-md-4 col-12 text-start mt-5">
                        <h3 className='text-danger fw-bold'>My Account</h3>
                        <p className="click-effect" onClick={() => { soonFeature() }}>Login</p>
                        <p className="click-effect" onClick={() => { soonFeature() }}>Track Order</p>
                    </div>
                    <div className="col-md-4 col-12 text-start mt-5 ">
                        <h3 className='text-danger fw-bold'>Contact Us</h3>
                        <p >About E-commerce</p>
                        <p >Email: e-commerce@gmail.com</p>
                        <p >Phone: 123-456-7890</p>
                    </div>
                    <p className="mt-5 text-center">© 2024, All Rights Reserved</p>
                    <p className="mt-2 text-center">Developed & Maintained by <span style={{ fontSize: '18px' }} className='text-danger fw-bold'>Mohamed Ashraf</span></p>
                </Row>
            </Container>
        </footer>
    )
}
