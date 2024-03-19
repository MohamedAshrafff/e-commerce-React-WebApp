import React from 'react'
import { Container } from 'react-bootstrap'

export default function Carousel() {
    return (
        <Container className='my-3 '>
            <div id="carouselExampleIndicators" className="carousel slide " >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/march_2024/paymob36_mainbanner_web_ar_new.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/march_2024/paymob36_mainbanner_web_ar_new.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Ramadan_2024_newTheme/etisalatcash_mainbanner_web_ar.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Container>
    )
}
