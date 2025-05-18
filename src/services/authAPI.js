// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // your backend base URL
// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { 'Content-Type': 'application/json' }
    });
    // response.data has ApiResponse: { statusCode, message, data }
    if (response.data.statusCode === 200) {
      return response.data.message; // or return response.data.data if you send something
    } else {
      // If backend returns other statusCode but HTTP 200, treat as error
      throw new Error(response.data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Register error:', error.response?.data || error.message);
    // Try to unwrap ApiResponse error message if present
    const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
    throw new Error(errorMsg);
  }
};

// Login user and get JWT token
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });
    // response.data has ApiResponse<Map<string, string>>
    if (response.data.statusCode === 200) {
      // return the token and username from data
      return {
        token: response.data.data.token,
        username: response.data.data.username,
      };
    } else {
      throw new Error(response.data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
    throw new Error(errorMsg);
  }
};




// Send forgot password request
export const forgotPassword = async ({ email }) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email }, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.data.statusCode === 200) {
      return response.data.message;
    } else {
      throw new Error(response.data.message || 'Failed to send reset instructions');
    }
  } catch (error) {
    console.error('Forgot password error:', error.response?.data || error.message);
    const errorMsg = error.response?.data?.message || error.message || 'Unknown error';
    throw new Error(errorMsg);
  }
};
