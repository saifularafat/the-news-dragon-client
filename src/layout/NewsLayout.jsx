import React from 'react';
import Header from '../pages/Home/Share/Header/Header';
import Footer from '../pages/Home/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNave from '../pages/Home/Share/RightNave/RightNave';

const NewsLayout = () => {
    return (
        <div>
        <Header />

        <Container>
            <Row>
                <Col lg={9}>
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

export default NewsLayout;