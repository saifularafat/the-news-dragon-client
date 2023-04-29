import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms And Condition Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non quae itaque iste sequi. Cumque sequi vitae exercitationem dolores asperiores officia culpa molestiae assumenda a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid repellat facere cum soluta.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum doloremque consequuntur numquam cumque quod soluta a mollitia!</p>

            <p>Go Back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;