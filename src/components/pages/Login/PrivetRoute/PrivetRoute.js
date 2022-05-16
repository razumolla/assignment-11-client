import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/Firebase.init';
import Loading from '../../shared/Loading/Loading'
const PrivetRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading> </Loading>
    }
    if (!user) {



        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivetRoute;