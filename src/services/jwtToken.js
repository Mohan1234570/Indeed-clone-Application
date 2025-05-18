// src/services/jwtToken.js

const jwtToken = {
    getToken: () => {
      return localStorage.getItem("jwtToken");
    },
    setToken: (token) => {
        console.log("📝 Saving token to localStorage:", token); 
      localStorage.setItem("jwtToken", token);
    },
    removeToken: () => {
      localStorage.removeItem("jwtToken");
    }
  };
  
  export default jwtToken;
  