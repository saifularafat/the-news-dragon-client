import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';
import bg from '../../../../assets/bg.png';

const RightNave = () => {
    return (
        <div>
            <h2 className='fs-3 fw-bold mb-4'>Login with</h2>
            <Button variant="outline-primary" className='mb-3 fs-5 w-100 py-2'> <FaGoogle />
                <span className='ps-2'>Login with Google</span>
            </Button>
            <Button variant="outline-secondary" className='fs-5 w-100 py-2'><FaGithub />
                <span className='ps-2'>Login with Github</span>
            </Button>
            <div>
                <h2 className='fs-3 fw-bold mt-5 mb-3'>Find Us On</h2>
                <ListGroup className='w-100'>
                    <ListGroup.Item className='py-3 fs-4 text-secondary'><span className='text-primary pe-2'><FaFacebookF /></span> Facebook </ListGroup.Item>
                    <ListGroup.Item className='py-3 fs-4 text-secondary'><span className='text-primary pe-2'><FaTwitter /></span> Twitter</ListGroup.Item>
                    <ListGroup.Item className='py-3 fs-4 text-secondary'><span className='text-danger pe-2'><FaInstagram /></span>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone />
            <div className='right-relative mb-5'>
                <div>
                    <img src={bg} alt="" className='w-100' />
                </div>
                <div className='right-absolute'>
                    <h2 className='fs-1 fw-bold pb-3'>Create an Amazing Newspaper</h2>
                    <p className='fs-5 fw-medium pb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger" className='fs-4 py-3 px-5'>Danger</Button>
                </div>

            </div>

        </div>
    );
};

export default RightNave;