import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div>
            <h2 className='fs-3 fw-semibold mb-5 mt-2'>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 text-secondary'><span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 text-secondary'><span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 text-secondary'><span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsights;