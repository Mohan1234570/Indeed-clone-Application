import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import Header from "../components/Header"; // Your navbar with shadow
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const query = useQuery();
  const token = query.get("token");
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing password reset token.");
    }
  }, [token]);

  const handleSubmit = async () => {
    setError("");
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/auth/reset-password", {
        token,
        newPassword,
      });
      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <>
      <Header /> {/* Navbar with shadow */}

      {/* margin-top to clear fixed header height + spacing */}
      <Container maxWidth="sm" sx={{ mt: 18, mb: 6 }}>
        <Paper elevation={6} sx={{ p: 6, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Reset Your Password
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          {!success && (
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="New Password"
                type="password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Confirm New Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={loading}
                sx={{ py: 1.5, fontWeight: "bold" }}
              >
                {loading ? <CircularProgress size={24} /> : "Reset Password"}
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default ResetPassword;
