/*
import axios from 'axios';

const API_URL = 'http://localhost:8080';


export const savePost = async (payload) => {
    try {
        return await axios.post(`${API_URL}/post`, payload);
        
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const getAllPosts = async () => {
    try {
        return await axios.get(`${API_URL}/posts`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}
*/

import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const savePost = async (payload) => {
    console.log('Sending payload:', payload); // 👈 Add this
    try {
      const response = await axios.post(`${API_URL}/post`, payload, {
        headers: { 'Content-Type': 'application/json' } // 👈 make sure this is present
      });
      return response.data;
    } catch (error) {
      console.log('Error: ', error.message);
      if (error.response) {
        console.log('Error Response: ', error.response.data);
        return error.response.data;
      } else {
        console.log('Network Error or No Response');
        return { message: 'Network Error or No Response' };
      }
    }
  };
  
  export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        console.log('API Response:', response); // Log the response

        // Assuming the response is just an array or object with posts as an array
        return response.data; // If data is directly an array
    } catch (error) {
        console.log('Error:', error.message);
        if (error.response) {
            console.log('Error Response:', error.response.data); // Logs the error response from the server
            return error.response.data;
        } else {
            console.log('Network Error or No Response');
            return { message: 'Network Error or No Response' }; // Handle cases where no response is received
        }
    }
};
