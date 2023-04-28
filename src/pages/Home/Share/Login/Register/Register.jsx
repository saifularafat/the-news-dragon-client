import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Provider/AuthProvider';

const Register = () => {
    const [registerError, setRegisterError] = useState();
    const [registerSuccess, setRegisterSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false)

    const { createUser, profile } = useContext(AuthContext)



    const handlerRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        setRegisterError('')
        setRegisterSuccess('')

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
                setRegisterSuccess('Your Register Successful..!')
                form.reset();
            })
            .catch(error => {
                console.error(error.message)
                setRegisterError(error.message)
            })
    }


    return (
        <Container className='w-50 mx-auto border border-secondary-subtle p-5 mb-3 mt-0 rounded-2'>
            <h2 className='text-center pb-3 fs-1'>Please Register</h2>
            <Form onSubmit={handlerRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" className='py-2' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo url" className='py-2' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" className='py-2' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type= { showPassword ? "text" : "password"}
                    name='password' 
                    placeholder="Password" 
                    className='py-2' />
                </Form.Group>
                <Form.Text className="text-black ">
                    <p onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ?
                                <span className='text-success fw-semibold'>Hide Password</span>
                                : <span className='text-danger fw-semibold'>Show Password</span>
                        }
                    </p>
                </Form.Text>

                <Button variant="secondary" type="submit" className='w-100 fw-semibold fs-5 mb-3'>
                    Register
                </Button>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-black">
                    <span>Already Have An Account ?</span><Link to='/login' className='text-success'>login</Link>
                </Form.Text>


                <Form.Text className="text-success fs-2 text-center">
                    <p><small>{registerSuccess}</small></p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p><small>{registerError}</small></p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;