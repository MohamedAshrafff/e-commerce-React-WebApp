import React from 'react'
import landing from '../Assets/Images/h.jpg'

export default function LandingImage() {
    return (
        <div className='w-100' style={{ height: '40vh', position: 'relative' }}>
            <img
                className='w-100'
                style={{
                    objectFit: 'cover',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '0',
                }}
                src={landing}
                alt="Landing"
            />            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)',
                    zIndex: '1',
                }}> </div >

            <span className='text-light fs-1 heading-font' style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem', zIndex: '2' }}>Welcome to E-commerce</span>
        </div>
    )
}
