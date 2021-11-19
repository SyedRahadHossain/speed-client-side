import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

import { styled } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';





const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    const GoogleButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[800]),
        backgroundColor: red[800],
        '&:hover': {
            backgroundColor: red[900],
        },
    }));

    const LoginButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[800],
        },
    }));

    // const color = grey[900];

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="outlined" />

                            <LoginButton sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</LoginButton>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text" color="error">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>OR</p>
                       
                        <GoogleButton
                            onClick={handleGoogleSignIn} variant="contained">Login With Google</GoogleButton>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;