


// import jwtToken from '../services/jwtToken';
// import { loginUser, registerUser } from '../services/authAPI';
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   Dialog,
//   TextField,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Divider,
//   Link,
//   useTheme,
//   Alert,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";


// const Landing = () => {
//   const navigate = useNavigate();
//   const theme = useTheme();

//   // Dialog states
//   const [openLogin, setOpenLogin] = useState(false);
//   const [openRegister, setOpenRegister] = useState(false);
//   const [openForgotPassword, setOpenForgotPassword] = useState(false);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   // Login form state
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [loginError, setLoginError] = useState("");

//   // Register form state
//   const [registerName, setRegisterName] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [registerError, setRegisterError] = useState("");

//   // // Forgot password states (existing)
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [forgotSuccess, setForgotSuccess] = useState(false);
//   const [forgotError, setForgotError] = useState("");

//   // Handlers for dialogs open/close omitted for brevity (keep your current code)

//   // Login submit handler
//   const handleLoginSubmit = async () => {
//     setLoginError("");
//     try {
//       const data = await loginUser({ email: loginEmail, password: loginPassword });
//       console.log("🔐 Login API response:", data);
//       // Assume backend returns { token: "...", username: "..." }
//       jwtToken.setToken(data.token); // save JWT token in localStorage
//       console.log("📥 Token saved:", data.token);
//       setUserName(data.username || loginEmail); // use username from backend or email
//       setIsLoggedIn(true);
//       setOpenLogin(false);
//     } catch (error) {
//       setLoginError(error.message || "Login failed");
//     }
//   };

//   // Register submit handler
//   const handleRegisterSubmit = async () => {
//     setRegisterError("");
//     try {
//       const data = await registerUser({
//         name: registerName,
//         email: registerEmail,
//         password: registerPassword,
//       });
//       // Auto-login after register (optional)
//       jwtToken.setToken(data.token);
//       setUserName(data.username || registerName);
//       setIsLoggedIn(true);
//       setOpenRegister(false);
//     } catch (error) {
//       setRegisterError(error.message || "Registration failed");
//     }
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       setTimeout(() => {
//         navigate("/home");
//       }, 2000);
//     }
//   }, [isLoggedIn, navigate]);

//   return (
//     <div>
//       <Header />
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#f0f2f5",
//           px: 2,
//         }}
//       >
//         {!isLoggedIn ? (
//           <>
//             <Typography
//               variant="h3"
//               sx={{ mb: 4, fontWeight: 700, color: theme.palette.primary.dark }}
//             >
//               Welcome to Indeed Clone 🚀
//             </Typography>
//             <Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mr: 2, px: 4, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
//                 onClick={() => setOpenLogin(true)}
//               >
//                 Login
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 sx={{ px: 4, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
//                 onClick={() => setOpenRegister(true)}
//               >
//                 Register
//               </Button>
//             </Box>
//           </>
//         ) : (
//           <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
//             Welcome, {userName}! Redirecting...
//           </Typography>
//         )}

//         {/* Login Dialog */}
//         <Dialog open={openLogin} onClose={() => setOpenLogin(false)} maxWidth="xs" fullWidth>
//           <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
//             Sign In
//           </DialogTitle>
//           <Divider sx={{ mb: 2 }} />
//           <DialogContent>
//             {loginError && <Alert severity="error">{loginError}</Alert>}
//             <TextField
//               autoFocus
//               margin="normal"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="outlined"
//               placeholder="you@example.com"
//               sx={{ mb: 2 }}
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               label="Password"
//               type="password"
//               fullWidth
//               variant="outlined"
//               placeholder="Enter your password"
//               sx={{ mb: 0 }}
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//             />
//             <Box sx={{ textAlign: "right", mt: 1 }}>
//               <Link
//                 component="button"
//                 variant="body2"
//                 onClick={() => {
//                   setOpenLogin(false);
//                  setOpenForgotPassword(true);
//                 }}
//                 sx={{ fontWeight: "bold" }}
//               >
//                 Forgot password?
//               </Link>
//             </Box>
//           </DialogContent>
//           <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
//             <Button onClick={() => setOpenLogin(false)} color="secondary" sx={{ fontWeight: "bold" }}>
//               Cancel
//             </Button>
//             <Button
//               onClick={handleLoginSubmit}
//               variant="contained"
//               color="primary"
//               sx={{ fontWeight: "bold", px: 3 }}
//             >
//               Login
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* Register Dialog */}
//         <Dialog open={openRegister} onClose={() => setOpenRegister(false)} maxWidth="xs" fullWidth>
//           <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
//             Create Account
//           </DialogTitle>
//           <Divider sx={{ mb: 2 }} />
//           <DialogContent>
//             {registerError && <Alert severity="error">{registerError}</Alert>}
//             <TextField
//               autoFocus
//               margin="normal"
//               label="Full Name"
//               type="text"
//               fullWidth
//               variant="outlined"
//               placeholder="Your full name"
//               sx={{ mb: 2 }}
//               value={registerName}
//               onChange={(e) => setRegisterName(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="outlined"
//               placeholder="you@example.com"
//               sx={{ mb: 2 }}
//               value={registerEmail}
//               onChange={(e) => setRegisterEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               label="Password"
//               type="password"
//               fullWidth
//               variant="outlined"
//               placeholder="Create a password"
//               sx={{ mb: 3 }}
//               value={registerPassword}
//               onChange={(e) => setRegisterPassword(e.target.value)}
//             />
//           </DialogContent>
//           <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
//             <Button onClick={() => setOpenRegister(false)} color="secondary" sx={{ fontWeight: "bold" }}>
//               Cancel
//             </Button>
//             <Button
//               onClick={handleRegisterSubmit}
//               variant="contained"
//               color="primary"
//               sx={{ fontWeight: "bold", px: 3 }}
//             >
//               Register
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* Forgot Password Dialog (your existing code) */}
//         {/* ... */}
//       </Box>
//     </div>
//   );
// };

// export default Landing;




import jwtToken from '../services/jwtToken';
import { loginUser, registerUser } from '../services/authAPI';
import React, { useState, useEffect } from "react";
import { forgotPassword } from '../services/authAPI';
import {
  Box,
  Button,
  Typography,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Link,
  useTheme,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

// You need to add forgotPassword API call in your authAPI.js
// import { forgotPassword } from '../services/authAPI';

const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Dialog states
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  // Forgot password states
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [forgotError, setForgotError] = useState("");

  // Login submit handler
  const handleLoginSubmit = async () => {
    setLoginError("");
    try {
      const data = await loginUser({ email: loginEmail, password: loginPassword });
      console.log("🔐 Login API response:", data);
      jwtToken.setToken(data.token);
      console.log("📥 Token saved:", data.token);
      setUserName(data.username || loginEmail);
      setIsLoggedIn(true);
      setOpenLogin(false);
      navigate("/home");
    } catch (error) {
      setLoginError(error.message || "Login failed");
    }
  };

  // Register submit handler
  const handleRegisterSubmit = async () => {
    setRegisterError("");
    try {
      const data = await registerUser({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      });
      jwtToken.setToken(data.token);
      setUserName(data.username || registerName);
      setIsLoggedIn(true);
      setOpenRegister(false);
    } catch (error) {
      setRegisterError(error.message || "Registration failed");
    }
  };

  // Forgot password submit handler
  const handleForgotPasswordSubmit = async () => {
    setForgotError("");
    setForgotSuccess(false);
  
    if (!forgotEmail) {
      setForgotError("Please enter your email address");
      return;
    }
  
    try {
      const message = await forgotPassword({ email: forgotEmail });
      setForgotSuccess(true);
    } catch (error) {
      setForgotError(error.message || "Failed to send reset instructions");
    }
  };
  

  useEffect(() => {
    if (isLoggedIn) {
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
          backgroundColor: "#f0f2f5",
          px: 2,
        }}
      >
        {!isLoggedIn ? (
          <>
            <Typography
              variant="h3"
              sx={{ mb: 4, fontWeight: 700, color: theme.palette.primary.dark }}
            >
              Welcome to Indeed Clone 🚀
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2, px: 4, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
                onClick={() => setOpenLogin(true)}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ px: 4, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
                onClick={() => setOpenRegister(true)}
              >
                Register
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
            Welcome, {userName}! Redirecting...
          </Typography>
        )}

        {/* Login Dialog */}
        <Dialog open={openLogin} onClose={() => setOpenLogin(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
            Sign In
          </DialogTitle>
          <Divider sx={{ mb: 2 }} />
          <DialogContent>
            {loginError && <Alert severity="error">{loginError}</Alert>}
            <TextField
              autoFocus
              margin="normal"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="you@example.com"
              sx={{ mb: 2 }}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              placeholder="Enter your password"
              sx={{ mb: 0 }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  setOpenLogin(false);
                  setOpenForgotPassword(true);
                }}
                sx={{ fontWeight: "bold" }}
              >
                Forgot password?
              </Link>
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
            <Button onClick={() => setOpenLogin(false)} color="secondary" sx={{ fontWeight: "bold" }}>
              Cancel
            </Button>
            <Button
              onClick={handleLoginSubmit}
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", px: 3 }}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>

        {/* Register Dialog */}
        <Dialog open={openRegister} onClose={() => setOpenRegister(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
            Create Account
          </DialogTitle>
          <Divider sx={{ mb: 2 }} />
          <DialogContent>
            {registerError && <Alert severity="error">{registerError}</Alert>}
            <TextField
              autoFocus
              margin="normal"
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Your full name"
              sx={{ mb: 2 }}
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <TextField
              margin="normal"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="you@example.com"
              sx={{ mb: 2 }}
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              placeholder="Create a password"
              sx={{ mb: 3 }}
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
            <Button onClick={() => setOpenRegister(false)} color="secondary" sx={{ fontWeight: "bold" }}>
              Cancel
            </Button>
            <Button
              onClick={handleRegisterSubmit}
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", px: 3 }}
            >
              Register
            </Button>
          </DialogActions>
        </Dialog>

        {/* Forgot Password Dialog */}
        <Dialog open={openForgotPassword} onClose={() => setOpenForgotPassword(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
            Reset Password
          </DialogTitle>
          <Divider sx={{ mb: 2 }} />
          <DialogContent>
            {forgotError && <Alert severity="error" sx={{ mb: 2 }}>{forgotError}</Alert>}
            {forgotSuccess ? (
              <Alert severity="success">
                Password reset instructions sent to your email.
              </Alert>
            ) : (
              <TextField
                autoFocus
                margin="normal"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                placeholder="you@example.com"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
            )}
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                setOpenForgotPassword(false);
                setForgotError("");
                setForgotSuccess(false);
              }}
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              Cancel
            </Button>
            {!forgotSuccess && (
              <Button
                onClick={handleForgotPasswordSubmit}
                variant="contained"
                color="primary"
                sx={{ fontWeight: "bold", px: 3 }}
              >
                Send Reset Link
              </Button>
            )}
          </DialogActions>+
        </Dialog>
      </Box>
    </div>
  );
};

export default Landing;
