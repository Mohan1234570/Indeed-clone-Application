import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog, TextField, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Landing = () => {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);
  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setUserName("John Doe"); // You can replace this with actual entered name
    setOpenLogin(false);
  };

  const handleRegisterSubmit = () => {
    setIsLoggedIn(true);
    setUserName("John Doe"); // Replace as needed
    setOpenRegister(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // After 2 seconds, redirect to home
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
        <Header />
    <Box 
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {!isLoggedIn ? (
        <>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Welcome to Indeed Clone 🚀
          </Typography>
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mr: 2 }}
              onClick={handleLoginOpen}
            >
              Login
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
              onClick={handleRegisterOpen}
            >
              Register
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="h4" sx={{ mt: 2 }}>
          Welcome, {userName}! Redirecting...
        </Typography>
      )}

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Email Address" type="email" fullWidth />
          <TextField margin="dense" label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLoginSubmit}>Login</Button>
        </DialogActions>
      </Dialog>

      {/* Register Dialog */}
      <Dialog open={openRegister} onClose={handleRegisterClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Full Name" type="text" fullWidth />
          <TextField margin="dense" label="Email Address" type="email" fullWidth />
          <TextField margin="dense" label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegisterClose}>Cancel</Button>
          <Button onClick={handleRegisterSubmit}>Register</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </div>
  );
};

export default Landing;
