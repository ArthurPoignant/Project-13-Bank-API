import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/userSlice';
import Form from '../component/Form';
import './SignIn.css';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

  const handleSignIn = (username, password) => {
    return dispatch(login({ email: username, password }));
  };

  const handleSuccess = () => {
    navigate('/profile');
  };

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form 
          firstInput="Username" 
          secondInput="Password" 
          checkbox="remember-me" 
          button="sign-in" 
          onSubmit={handleSignIn} 
          onSuccess={handleSuccess}
        />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
      </section>
    </main>
  );
}
