import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../../Provider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)


    const handlerLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
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
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }} className='me-3'></FaUserCircle>
                            }
                            {
                                user ? <Link to='/login'>
                                    <Button onClick={handlerLogOut} variant="secondary" className='fs-5'>
                                        Log Out
                                    </Button>
                                </Link> :
                                    <Link to='/login'>
                                        <Button variant="secondary">
                                            Login
                                        </Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;