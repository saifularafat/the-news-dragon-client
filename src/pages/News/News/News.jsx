import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger" className='fs-4 my-2 px-4'><FaArrowLeft className='pe-2' />All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>

            <EditorsInsights />
        </div>
    );
};

export default News;