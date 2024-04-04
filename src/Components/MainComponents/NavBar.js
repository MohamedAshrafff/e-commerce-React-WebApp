import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const cart = useSelector((state) => state.lists.cart);
    const loc = useLocation();
    const toggleExpand = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    }
    const toggleChecker = () => {
        if (window.innerWidth < 766) toggleExpand();
    }
    const navHeight = window.innerWidth >= 766 ? '3.5rem' : '';
    return (
        <>
            <Navbar expand="md" variant="dark" fixed="top" className="bg-dark " style={{ height: navHeight }} expanded={expanded}>
                <Container>
                    <Link to={''} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>E-Commerce</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarNav" onClick={() => toggleChecker()} />
                    <Navbar.Collapse id="navbarNav" >
                        <Nav className="me-auto text-center">
                            <Link className={`nav-link mx-3 ${loc.pathname == '/' ? 'active fw-bold  border-bottom border-2 ' : ''}`} onClick={() => toggleChecker()} to={''}>Home</Link>
                            <Link className={`nav-link mx-3 ${loc.pathname == '/about' ? 'active  fw-bold border-bottom border-2' : ''}`} onClick={() => toggleChecker()} to={'about'}>About</Link>
                            <Link className={`nav-link mx-3 ${loc.pathname == '/products' ? 'active  fw-bold border-bottom border-2' : ''}`} onClick={() => toggleChecker()} to={'products'}>Products</Link>
                        </Nav>
                        {expanded && <div style={{ height: '20px' }}></div>}
                        <Link to={'cart'} className="rounded-circle" onClick={() => toggleChecker()}
                            style={{
                                textDecoration: 'none',
                                color: '#FFF',
                                position: 'relative',
                                alignSelf: 'center',
                            }}>
                            <IoMdCart size={'1.8rem'} />
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    color: "white",
                                    width: '1.2rem',
                                    height: '1.3rem',
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    alignSelf: 'center',
                                    transform: 'translate(80%, -45%)'
                                }} >{cart.length}</div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ height: '50px' }}></div>
        </>
    )
}
