import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './User.css';
import Account from '../component/Account';
import { fetchUserProfile, updateUserName } from '../store/userSlice';

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  /* console.log(user.body) */

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user && user.body.firstName) {
      setFirstName(user.body.firstName);
      setLastName(user.body.lastName);
      setNewFirstName(user.body.firstName);
      setNewLastName(user.body.lastName);
    }
  }, [user]);


  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveName = () => {
    dispatch(updateUserName({ token, profileData: { firstName: newFirstName, lastName: newLastName } }));
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button" onClick={handleEditName}>Edit Name</button>
      </div>
      {isEditing && (
        <div className="edit-name-form">
          <div>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div>
            <button onClick={handleSaveName}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
    </main>
  );
}
