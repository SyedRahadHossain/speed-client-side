import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import login from '../../../images/login.jpg';


import { styled } from '@mui/material/styles';
import {  grey } from '@mui/material/colors';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const RegisterButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[800],
        },
    }));
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1}}
                                id="outlined-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="outlined" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Re-enter Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="outlined" />

                            <RegisterButton sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</RegisterButton>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text" color='error'>Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Register;