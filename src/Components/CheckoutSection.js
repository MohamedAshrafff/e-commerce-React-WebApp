import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Redux/Slices/cart-slice';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function CheckoutSection() {

    const cart = useSelector((state) => state.lists.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClick = () => {
        const localCartStorage = localStorage.getItem('Order') ? JSON.parse(localStorage.getItem('Order')) : []
        let clonedCart = [[...cart], [{ date: (new Date().getDate() + `-` + new Date().getMonth() + `-` + new Date().getFullYear()) }]]
        localCartStorage.push([...clonedCart])
        localStorage.clear()
        localStorage.setItem('Order', JSON.stringify(localCartStorage))

        dispatch(clearCart())
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed Successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/other')
    }

    return (
        <div className="row d-flex flex-column" >
            <div className='col text-center mb-2'>
                <button className="btn btn-dark col-md-2 col-6 mb-3" onClick={() => { handleClick() }}>Checkout</button>
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
        </div >
    );
}
