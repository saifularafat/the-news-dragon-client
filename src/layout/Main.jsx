import React from 'react';
import Header from '../pages/Home/Share/Header/Header';
import Footer from '../pages/Home/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../pages/Home/Share/LeftNave/LeftNave';
import RightNave from '../pages/Home/Share/RightNave/RightNave';

const Main = () => {
    return (
        <div>
            <Header />

            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNave />
                    </Col>
                    
                    <Col lg={6}>
                        <Outlet />
                    </Col>

                    <Col lg={3}>
                        <RightNave />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default Main;