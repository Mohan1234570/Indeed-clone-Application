import { Box, Typography, Button, styled, GlobalStyles } from "@mui/material";
import Header from "../components/Header";
import { routhPath } from "../routes/route";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import React from "react";

import { useState } from "react";
import { Divider, ListItemIcon } from "@mui/material";

import { FaUserCircle } from 'react-icons/fa'; // Profile Icon
import { FaBriefcase } from 'react-icons/fa'; // Work Icon
import { FaCog } from 'react-icons/fa'; // Settings Icon
import { FaRegStar } from 'react-icons/fa'; // RateReview Icon
import { FaRegQuestionCircle } from 'react-icons/fa'; // HelpOutline Icon
import { FaSignOutAlt } from 'react-icons/fa'; // Logout Icon

const Component = styled(Box)({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  margin: '0 110px',
  '& > div': {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > p': {
      fontSize: 56,
      lineHeight: 1.25,
      letterSpacing: -1
    },
    '& > button': {
      width: 220,
      height: 60,
      background: 'rgb(37, 87, 167)',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 700,
      marginTop: 48
    }
  }
});

const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate(routhPath.profile);
    handleClose();
  };

  const handleJobs = () => {
    navigate(routhPath.jobs);
    handleClose();
  };

  const handleSettings = () => {
    console.log('Settings clicked');
    // Your logic for settings
  };

  const handleReviews = () => {
    console.log('Reviews clicked');
    // Your logic for reviews
  };

  const handleHelp = () => {
    console.log('Help clicked');
    // Your logic for help
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate("/");
  };

  const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";

  return (
    <>
      {/* Global styles to prevent unwanted text selection and focus outlines */}
      <GlobalStyles styles={{
        '*:focus': { outline: 'none' },
        'body, div, span, p': { userSelect: 'none' },
        'input, textarea, select, button': { userSelect: 'text' }
      }} />

      <Header />

      {/* Profile Dropdown */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 16, 
          right: 32, 
          zIndex: 1100 
        }}
      >
        <IconButton onClick={handleClick}>
          <Avatar alt="User" src="/path-to-user-image.jpg" sx={{ width: 48, height: 48 }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 10,
            sx: {
              width: 250,
              padding: 2,
              borderRadius: 3,
              mt: 1,
            }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box textAlign="center" mb={1}>
            <Avatar 
              alt="User" 
              src="/path-to-user-image.jpg"
              sx={{ width: 70, height: 70, margin: '0 auto', mb: 1 }}
            />
            <Typography variant="h6" fontWeight="bold">John Doe</Typography>
            <Typography variant="body2" color="text.secondary">johndoe@example.com</Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          <MenuItem onClick={handleProfile}>
            <ListItemIcon>
              <FaUserCircle fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleJobs}>
            <ListItemIcon>
              <FaBriefcase fontSize="small" />
            </ListItemIcon>
            Jobs
          </MenuItem>
          <MenuItem onClick={handleSettings}>
            <ListItemIcon>
              <FaCog fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleReviews}>
            <ListItemIcon>
              <FaRegStar fontSize="small" />
            </ListItemIcon>
            Reviews
          </MenuItem>
          <MenuItem onClick={handleHelp}>
            <ListItemIcon>
              <FaRegQuestionCircle fontSize="small" />
            </ListItemIcon>
            Help
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <FaSignOutAlt fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>

      {/* Main Home Content */}
      <Component>
        <Box>
          <Typography>Let's make your next<br /> great hire. Fast.</Typography>
          <Button variant="contained" onClick={() => navigate(routhPath.create)}>Post a job</Button>
        </Box>
        <Box>
          <img src={animatedImage} alt="home" style={{ width: 600 }} />
        </Box>
      </Component>
    </>
  );
};

export default Home;
