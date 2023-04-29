import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import first from '../../../../assets/1.png';
import second from '../../../../assets/2.png';
import third from '../../../../assets/3.png';
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';

function LeftNave() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-saifularafat.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2 className='fs-2 fw-semibold pb-3'>All Category</h2>
            <div className='ps-4 py-4'>
                {categories.map(category => <p
                    key={category.id}
                >
                    <Link to={`/category/${category.id}`}
                        className='fs-5 fw-medium text-black text-decoration-none'>
                        {category.name}
                    </Link>
                </p>)}
            </div>
            <div className='my-4'>
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 pb-2 text-secondary'>
                            <span className='fs-5 pe-1 fw-semibold text-black'>Sports</span>
                            <span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022
                        </p>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 pb-2 text-secondary'>
                            <span className='fs-5 pe-1 fw-semibold text-black'>Sports</span>
                            <span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022
                        </p>
                    </Card>
                </Col>
                <Col>
                    <Card className='text-left'>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <p className='ps-3 pb-2 text-secondary'>
                            <span className='fs-5 pe-1 fw-semibold text-black'>Sports</span>
                            <span className='pe-2'><FaRegCalendar /></span>Jan 4, 2022
                        </p>
                    </Card>
                </Col>
            </div>
        </div>
    );
}

export default LeftNave;