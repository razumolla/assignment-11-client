import React from 'react';
import auth from '../../../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info mx-auto d-block my-2'>
                <span>Google Sign In </span>
            </button>
        </div>
    );
};

export default SocialLogin;