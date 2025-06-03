import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear JWT token and any other session-related data
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/");

    console.log("User logged out");
  };

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        Are you sure you want to log out?
      </Typography>

      <Paper sx={{ padding: 3 }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          You will be logged out of your account. Are you sure you want to proceed?
        </Typography>

        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Log Out
        </Button>
      </Paper>
    </Box>
  );
};

export default LogoutPage;
