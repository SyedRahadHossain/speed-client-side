import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
// import useAuth from './../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const AdminButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[800]),
        backgroundColor: red[800],
        '&:hover': {
            backgroundColor: red[900],
        },
    }));

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://speed-fe2n.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // setSuccess(true);
                //     setSuccess(true);
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="text-danger">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <br />
                <br />
                <AdminButton type="submit" variant="contained">Make Admin</AdminButton>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;