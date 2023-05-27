import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import "../../scss/Login.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchLogin } from "../../redux/thunk/loginThunk";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUser = (event, field) => {
    if (field === "email" || field === "password") {
      setUser((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }));
    }
  };
  const onLogin = () => {
    debugger;
    if (user.email && user.password) {
      dispatch(fetchLogin(user));
    } else {
      setError("Please fill the mandatory fields");
    }
  };

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-register-wrapper">
      <div className="loginContainer">
        <br />
        <div className="loginHeader">
          <h2>Login</h2>
        </div>
        <br />
        <div className="loginContent">
          <Grid spacing={2} justifyContent="center" container>
            <Grid item md={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                required
                value={user.email}
                onChange={(event) => handleUser(event, "email")}
              />
            </Grid>
          </Grid>

          <br />

          <Grid spacing={2} justifyContent="center" container>
            <Grid item md={10}>
              <TextField
                fullWidth
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required
                value={user.password}
                onChange={(event) => handleUser(event, "password")}
              />
            </Grid>
          </Grid>
        </div>
        <br />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <br />
        <div className="loginActions">
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>

          <Button variant="contained" onClick={onRegister}>
            Register
          </Button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
