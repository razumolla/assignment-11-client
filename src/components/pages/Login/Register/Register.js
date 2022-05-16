import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/Firebase.init';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form container text-center w-50 mx-auto'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} className='text-center'>
                <input className='mt-3 p-1 rounded border-1 w-50' type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input className='mt-3 p-1 rounded border-1 w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input className='mt-3 p-1 rounded border-1 w-50' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input className='w-25 mx-auto btn btn-info mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

            <SocialLogin> </SocialLogin>
        </div>
    );
};

export default Register;