import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({ children }) => {
    const { user,loader } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);

    if(loader){
        return <Spinner animation="border" variant="danger" />
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRouter;