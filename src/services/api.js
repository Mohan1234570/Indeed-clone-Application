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


// export const savePost = async (payload) => {
//     console.log('Sending payload:', payload); // 👈 Add this
//     try {
//       const response = await axios.post(`${API_URL}/post`, payload, {
//         headers: { 'Content-Type': 'application/json' } // 👈 make sure this is present
//       });
//       return response.data;
//     } catch (error) {
//       console.log('Error: ', error.message);
//       if (error.response) {
//         console.log('Error Response: ', error.response.data);
//         return error.response.data;
//       } else {
//         console.log('Network Error or No Response');
//         return { message: 'Network Error or No Response' };
//       }
//     }
//   };



//const API_URL = 'http://localhost:8080';


import axios from 'axios';
import jwtToken from '../services/jwtToken';

const API_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 👇 Interceptor to attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = jwtToken.getToken();  // 👈 now using the utility
    console.log("📦 JWT Token being sent:", token); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;



export const savePost = async (payload) => {
  console.log('Sending payload:', payload);
  try {
    const response = await api.post('/post', payload);  // 👈 uses api instance with JWT
    return response.data;
  } catch (error) {
    console.log('Error:', error.message);
    if (error.response) {
      console.log('Error Response:', error.response.data);
      return error.response.data;
    } else {
      console.log('Network Error or No Response');
      return { message: 'Network Error or No Response' };
    }
  }
};
export const getAllPosts = async () => {
  try {
      const response = await api.get('/posts');
      return response.data;
  } catch (error) {
      console.log('Error:', error.message);
      if (error.response) {
          console.log('Error Response:', error.response.data);
          return error.response.data;
      } else {
          console.log('Network Error or No Response');
          return { message: 'Network Error or No Response' };
      }
  }
};