import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext)
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
                            <Link to='/' className='px-2'>Home</Link>
                            <Link to='about' className='px-2'>about</Link>
                            <Link to='career' className='px-2'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#profile"><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>}
                            {user ? <Link to='/logout'>
                                <Button variant="secondary">
                                    Log Out
                                </Button>
                            </Link> :
                                <Link to='/login'>
                                    <Button variant="secondary">
                                        Login
                                    </Button>
                                </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;