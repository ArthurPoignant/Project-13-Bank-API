import axios from 'axios';

// Base configuration
const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Endpoints

// User login
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User signup
export const signup = async (email, password, firstName, lastName) => {
  try {
    const response = await api.post('/user/signup', { email, password, firstName, lastName });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch user profile
export const getUserInfo = async (token) => {
  try {
    const response = await api.post('/user/profile', {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update user profile
export const updateUserNameAPI = async (token, profileData) => {
  try {
    const response = await api.put('/user/profile', profileData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
