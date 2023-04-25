import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="page logo" />
                <p className='text-secondary'>
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>

            <div className='d-flex bg-secondary py-2'>
                <Button variant="danger" className='fs-4 sw-semibold ms-4 py-2 px-4'>Latest</Button>
                <Marquee className='text-white' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='my-5'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-3">
                            <Nav.Link href="#home">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#about">
                                <Link to='about'>about</Link>
                            </Nav.Link>
                            <Nav.Link href="#career">
                                <Link to='career'>Career</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;