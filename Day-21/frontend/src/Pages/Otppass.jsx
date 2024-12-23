import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";
import { Box, Stack } from '@mui/material';

const Otppass = () => {
    const [fpass, setfpass] = useState({
        newpassword: "",
        email: "",
        otp: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setfpass({ ...fpass, [name]: value });
    };

    const handleSubmit = (el) => {
        el.preventDefault();
        axios
            .post("http://localhost:8080/resetPassword", fpass)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
  return (
    <div>
  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  required
                  variant="outlined"
                  onChange={handleChange}
                />
                    <TextField
                      fullWidth
                      label="OTP"
                      name="otp"
                      type="text"
                      required
                      variant="outlined"
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      label="New Password"
                      name="newPassword"
                      type="password"
                      required
                      variant="outlined"
                      onChange={handleChange}
                    />
                <Button 
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ 
                    mt: 2,
                    backgroundColor: '#90caf9',
                    '&:hover': {
                      backgroundColor: '#6b9dc7'
                    }
                  }}
                >
                  change password
                </Button>
              </Stack>
            </Box>
    </div>
  )
}

export default Otppass