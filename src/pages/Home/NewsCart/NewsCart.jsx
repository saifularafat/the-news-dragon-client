import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0 fw-semibold text-black'>{author?.name}</p>
                        <p className='fw-semibold text-secondary'>{moment(author?.published_date).format("yyyy-MM-D")}</p>
                    </div>
                    <div className='fs-5'>
                        <span className='pe-2'><FaRegBookmark></FaRegBookmark></span>
                        <span><FaShareAlt></FaShareAlt></span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fs-4 fw-bold lh-base py-2'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='py-2 text-secondary'>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link
                            to={`/news/${_id}`}> Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating 
                    style={{ maxWidth: 120 }} 
                    value={Math.round(rating?.number || 0)}
                    readOnly
                     />
                    <span className='ps-2 fs-5'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye><span className='ps-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;