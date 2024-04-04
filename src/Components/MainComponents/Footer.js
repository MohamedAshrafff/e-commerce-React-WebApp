import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='bg-dark mt-5'>
            <Container >
                <Row className='text-light '>
                    <div className="col-md-4 col-12 text-start mt-5">
                        <h3 className='text-danger'>Most Searched</h3>
                        <p className="">Electronics</p>
                        <p className="">Men's Wear</p>
                        <p className="">Women's Wear</p>
                    </div>
                    <div className="col-md-4 col-12 text-start mt-5">
                        <h3 className='text-danger'>My Account</h3>
                        <p className="">Login</p>
                        <p className="">Track Order</p>
                    </div>
                    <div className="col-md-4 col-12 text-start mt-5 ">
                        <h3 className='text-danger'>Contact Us</h3>
                        <p className="">About E-commerce</p>
                        <p className="">Email: e-commerce@gmail.com</p>
                        <p className="">Phone: 123-456-7890</p>
                    </div>
                    <p className="mt-5 text-center">© 2024, All Rights Reserved</p>
                    <p className="mt-2 text-center">Developed & Maintained by <span className='text-danger'>Mohamed Ashraf</span></p>
                </Row>
            </Container>
        </footer>
    )
}
