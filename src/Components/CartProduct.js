import React from 'react'
import { Container, Row } from 'react-bootstrap'
export default function CartProduct(prod) {
    const product = { ...prod.item };
    return (
        <Container >
            <Row className='fs-4 my-3 d-flex align-items-center'>
                <div className='col-md-8 col-12 text-center d-flex align-items-center'>
                    <img className='col-md-6 mx-5' src={product.image} style={{ objectFit: 'cover', height: '150px', 'width': 'auto' }} alt="product" />
                    <div className='col-md-6 d-flex flex-column'>
                        <p >{product.title}</p>
                        <p>{product.price}</p>
                        <p>{'1'}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between col-md-4 col-12 text-center'>
                    <p>{product.price}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <hr className='mt-3 w-75 align-self-center' />
                </div>
            </Row>
        </Container>
    )
}
