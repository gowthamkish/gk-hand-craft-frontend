import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../scss/Login.scss";
import { fetchRegister } from "../../redux/thunk/loginThunk";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeFields = (event, field) => {
    if (user.name && user.email && user.password) {
      setError("");
    }
    setUser((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const registerUser = () => {
    if (user.name && user.email && user.password) {
      dispatch(fetchRegister(user));
    } else {
      setError("Please fill the mandatory fields");
    }
  };

  return (
    <div className="login-register-wrapper">
      <div className="loginContainer">
        <br />
        <div className="loginHeader">
          <h2>Register</h2>
        </div>

        {JSON.stringify(user)}
        <br />
        <div className="loginContent">
          <Grid spacing={2} justifyContent="center" container>
            <Grid item md={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
                placeholder="Enter your username"
                onChange={(event) => handleChangeFields(event, "name")}
              />
            </Grid>
          </Grid>

          <br />

          <Grid spacing={2} justifyContent="center" container>
            <Grid item md={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                placeholder="Enter your email"
                onChange={(event) => handleChangeFields(event, "email")}
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
                placeholder="Enter password"
                onChange={(event) => handleChangeFields(event, "password")}
              />
            </Grid>
          </Grid>
        </div>
        <br />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <br />
        <div className="loginActions">
          <Link to="/">
            <Button variant="contained">Back to Login</Button>
          </Link>
          <Link to="/register">
            <Button onClick={registerUser} variant="contained">
              Register
            </Button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Register;
