import React, { useContext, useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../Provider/AuthProvider';

const Login = () => {
    const [loginError, setLoginError]= useState();
    const [loginSuccess, setLoginSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);

    const from = location.state?.from?.pathname || '/category/0'

    const {logIn,loader} = useContext(AuthContext);

    if(loader){
        return <Spinner animation="border" variant="danger" />
    }

    const handlerLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setLoginError('')
        setLoginSuccess('')

        logIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged)
                setLoginSuccess('Your login SuccessFul..!')
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message)
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handlerLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type= {showPassword ? "text" : "password" } 
                    name='password' 
                    placeholder="Password" 
                    className='py-2' />
                </Form.Group>
                <Form.Text className="">
                <p onClick={()=> setShowPassword(!showPassword)}>
                    {
                        showPassword ? 
                        <span>Hide PAssword</span>
                        : <span>Show Password</span>
                    }
                </p>
                </Form.Text>

                <Button variant="secondary" type="submit" className='w-100 fs-5 mb-3'>
                    Login
                </Button>
                <p className='text-danger fs-5'>{loginError}</p>
                <p className='text-success fs-5'>{loginSuccess}</p>

                <Form.Text className="text-black">
                <span>Dont’t Have An Account ?</span><Link to='/register' className='text-danger'>Register</Link>
                </Form.Text>

                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;