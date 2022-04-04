import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'

const Header = () => {
    return (
        <div>
            <Navbar className='' bg="" sticky="top" expand="lg" >
                <Container>
                <Navbar.Brand href="#home"><img width="40px" src={logo} alt="" srcset="" /></Navbar.Brand>
                    
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fw-bold text-gray' as={Link} to="/">HOME </Nav.Link>
                        <Nav.Link className='fw-bold text-gray' as={Link} to="/reviews">REVIEWS</Nav.Link>
                        <Nav.Link className='fw-bold text-gray' as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                        <Nav.Link className='fw-bold text-gray' as={Link} to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link className='fw-bold text-gray' as={Link} to="/about">ABOUT</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;