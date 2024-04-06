import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSection() {
    return (
        <div className="row d-flex flex-column" >
            <div className='col text-center mb-2'>
                <Link to={'/'} className="btn btn-dark col-md-2 col-6 mb-3">Checkout</Link>
                <p>Tax included. Shipping and discounts calculated at checkout.</p>
            </div>
            <div className='col'>
                <div className="trustBarTitle" style={{ fontSize: '12px', fontFamily: 'Lato', textAlign: 'center', margin: '0px' }}>
                    Experience worry-free online transactions with our Secure Trust Payment system. We prioritize your security by employing advanced encryption and fraud detection measures
                </div>
                <div className="badgesContainer" style={{ display: 'block', textAlign: 'center' }}>
                    <div className="badgeContainer" style={{ height: '54px', width: '60px', display: 'inline-block', position: 'relative' }}>
                        <img src="https://trust.conversionbear.com/../static/badges/visa_1_color_card.svg" className="imageContainer" style={{ height: '80%', width: '80%', position: 'absolute', top: '50%', left: '50%', right: '-50%', transform: 'translate(-50%, -50%)' }} alt="Visa" />
                    </div>
                    <div className="badgeContainer" style={{ height: '54px', width: '60px', display: 'inline-block', position: 'relative' }}>
                        <img src="https://trust.conversionbear.com/../static/badges/mastercard_color_card.svg" className="imageContainer" style={{ height: '80%', width: '80%', position: 'absolute', top: '50%', left: '50%', right: '-50%', transform: 'translate(-50%, -50%)' }} alt="Mastercard" />
                    </div>
                    <div className="badgeContainer" style={{ height: '54px', width: '60px', display: 'inline-block', position: 'relative' }}>
                        <img src="https://trust.conversionbear.com/../static/badges/paypal_1_color_card.svg" className="imageContainer" style={{ height: '80%', width: '80%', position: 'absolute', top: '50%', left: '50%', right: '-50%', transform: 'translate(-50%, -50%)' }} alt="PayPal" />
                    </div>
                    <div className="badgeContainer" style={{ height: '54px', width: '60px', display: 'inline-block', position: 'relative' }}>
                        <img src="https://trust.conversionbear.com/../static/badges/shoppay3_color_card.svg" className="imageContainer" style={{ height: '80%', width: '80%', position: 'absolute', top: '50%', left: '50%', right: '-50%', transform: 'translate(-50%, -50%)' }} alt="ShopPay" />
                    </div>
                    <div className="badgeContainer" style={{ height: '54px', width: '60px', display: 'inline-block', position: 'relative' }}>
                        <img src="https://trust.conversionbear.com/../static/badges/applepay2_color_card.svg" className="imageContainer" style={{ height: '80%', width: '80%', position: 'absolute', top: '50%', left: '50%', right: '-50%', transform: 'translate(-50%, -50%)' }} alt="Apple Pay" />
                    </div>
                </div>
            </div>
        </div>
    );
}
