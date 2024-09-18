import './Navbar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/userSlice';

export default function Navbar({ image }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const isAuthenticated = !!useSelector((state) => state.user.token);
    const [firstName, setFirstName] = useState('');

    const handleSignOut = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (user && user.body.firstName) {
            setFirstName(user.body.firstName);
        }
    }, [user]);

    return <>
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/"><img
                className="main-nav-logo-image"
                src={image}
                alt="Argent Bank Logo"
            />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {isAuthenticated ? (
                <div className='content-nav'>
                    <Link to="/profile"><i className="fa fa-user-circle"></i><span>{firstName}</span></Link>
                    <Link to="/" onClick={handleSignOut} > <i className='fa fa-sign-out'></i><span>Sign Out</span></Link>
                </div>
            ) : (
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        <span>Sign In</span></Link>
                </div>
            )}
        </nav>
    </>
}