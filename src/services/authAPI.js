// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // your backend base URL

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Register error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// Login user and get JWT token
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log("🎯 Full login response:", response);
    return response.data; // should contain the JWT token
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
