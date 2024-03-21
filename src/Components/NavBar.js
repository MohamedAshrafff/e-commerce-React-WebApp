import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const cart = useSelector((state) => state.cart);
    const loc = useLocation();
    console.log(loc.pathname);
    const toggleExpand = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    }
    return (
        <>
            <Navbar expand="md" variant="dark" fixed="top" className="bg-dark " expanded={expanded}>
                <Container>
                    <Link to={''} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>E-Commerce</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarNav" onClick={() => toggleExpand()} />
                    <Navbar.Collapse id="navbarNav" >
                        <Nav className="me-auto text-center">
                            <Link className={`nav-link mx-3 ${loc.pathname == '/' ? 'active fw-bold  border-bottom border-2 ' : ''}`} onClick={() => toggleExpand()} to={''}>Home</Link>
                            <Link className={`nav-link mx-3 ${loc.pathname == '/about' ? 'active  fw-bold border-bottom border-2' : ''}`} onClick={() => toggleExpand()} to={'about'}>About</Link>
                            <Link className={`nav-link mx-3 ${loc.pathname == '/products' ? 'active  fw-bold border-bottom border-2' : ''}`} onClick={() => toggleExpand()} to={'products'}>Products</Link>
                        </Nav>
                        <Link to={'cart'} className="rounded-circle" onClick={() => toggleExpand()}
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
                        <Link to={'favourites'} className="mx-3 rounded-circle" onClick={() => toggleExpand()}
                            style={{
                                textDecoration: 'none',
                                color: '#FFF',
                                position: 'relative',
                                alignSelf: 'center',
                            }}>
                            <MdFavorite size={'1.8rem'} />
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
                                }} >{0}</div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ height: '50px' }}></div> {/* Add space below the Navbar */}
        </>
    )
}
