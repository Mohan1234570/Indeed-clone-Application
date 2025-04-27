import React, { useState } from "react";
import { Box, Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "******",
    avatar: "https://via.placeholder.com/150",
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
    console.log("User Info Saved");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        Profile Information
      </Typography>
      
      {/* Avatar and Camera Icon */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 4 }}>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: 120, height: 120, marginBottom: 2 }}
        />
        <IconButton component="label" sx={{ backgroundColor: "#e0e0e0", padding: 1 }}>
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setUser({ ...user, avatar: URL.createObjectURL(file) });
              }
            }}
          />
          <FaCamera size={24} />
        </IconButton>
      </Box>

      {/* User Info Form */}
      <Paper sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              value={user.password}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>

        {/* Edit / Save Button */}
        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          {isEditing ? (
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
          ) : (
            <Button variant="outlined" color="primary" onClick={handleEdit}>
              Edit Profile
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
