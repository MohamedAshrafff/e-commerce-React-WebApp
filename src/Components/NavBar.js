import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
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
                            <Link className={`nav-link ${loc.pathname == '/' ? 'active fw-bold' : ''}`} onClick={() => toggleExpand()} to={''}>Home</Link>
                            <Link className={`nav-link ${loc.pathname == '/about' ? 'active  fw-bold' : ''}`} onClick={() => toggleExpand()} to={'about'}>About</Link>
                            <Link className={`nav-link ${loc.pathname == '/products' ? 'active  fw-bold' : ''}`} onClick={() => toggleExpand()} to={'products'}>Products</Link>
                        </Nav>
                        <Link to={'cart'} style={{ textDecoration: 'none', color: '#FFF', display: 'flex', alignItems: 'center' }}>
                            <IoMdCart size={22} />
                            <div style={{ color: 'yellow', fontWeight: 'bold', fontSize: 16, marginLeft: '5px' }}>{cart.length}</div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ height: '50px' }}></div> {/* Add space below the Navbar */}
        </>
    )
}
