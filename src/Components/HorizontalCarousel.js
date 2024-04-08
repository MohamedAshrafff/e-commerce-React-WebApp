import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


export default function HorizontalCarousel(props) {
    const items = props.items;


    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2200,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const itemsMapped = items.map((item, index) => {
        return (
            <div key={index} className="d-flex flex-column text-center justify-content-between">
                <Link to={`/products/${item.id}`} className="d-flex justify-content-around flex-column" style={{ ...styles.cardStyle, textDecoration: 'none', color: 'black', }}>
                    <div className='col-12 d-flex justify-content-center align-items-center' >
                        <div className="d-flex justify-content-center">
                            <img src={item.image} style={{ ...styles.imageStyle, ...styles.weight, }} alt="product" />
                        </div>
                    </div>
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text fs-4 fw-bold text-danger">${(item.price).toFixed(2)}</p>
                </Link>
            </div>
        )
    })

    return (
        <div className="container mt-5">
            <p className="fs-4 mb-2">Reccommended Items</p>
            <div className="slider-container " style={{ maxHeight: '50vh', padding: '30px' }}>
                <Slider {...settings}>
                    {items.length !== 0 && itemsMapped}
                </Slider>
            </div>
        </div>
    )
}


const styles = {
    size: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)'
    },
    weight: {
        fontWeight: '900'
    },
    btnWidth: {
        width: 'clamp(2rem, 2vw, 2.5rem)',
        height: 'clamp(2rem, 2vw, 2.5rem)',
    },
    imageStyle: {
        objectFit: 'cover',
        maxWidth: '70%',
        maxHeight: '25vh'
    },
    cardStyle: {
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '10px',
        height: '40vh'
    }
}