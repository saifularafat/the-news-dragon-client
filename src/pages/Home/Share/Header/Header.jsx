import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <Container>
            <div className='text-center mt-5'>
                <Link to='/'> <img src={logo} alt="page logo" /></Link>
                <p className='text-secondary'>
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>

            <div className='d-flex bg-secondary py-2 mb-3'>
                <Button variant="danger" className='fs-4 sw-semibold ms-4 py-2 px-4'>Latest</Button>
                <Marquee className='text-white' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;