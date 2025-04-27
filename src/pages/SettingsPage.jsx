import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Grid } from "@mui/material";

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSave = () => {
    // Handle saving the settings (e.g., API call)
    console.log("Settings saved!");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        Settings
      </Typography>

      <Paper sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Username" variant="outlined" fullWidth disabled value="johndoe123" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              defaultValue="johndoe@example.com"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Notification Preferences
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={6}>
                <Button
                  variant={emailNotifications ? "contained" : "outlined"}
                  onClick={() => setEmailNotifications(!emailNotifications)}
                >
                  Email Notifications
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant={smsNotifications ? "contained" : "outlined"}
                  onClick={() => setSmsNotifications(!smsNotifications)}
                >
                  SMS Notifications
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ marginTop: 3 }} onClick={handleSave}>
          Save Settings
        </Button>
      </Paper>
    </Box>
  );
};

export default SettingsPage;
