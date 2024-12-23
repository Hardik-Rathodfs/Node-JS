import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Otppass from './Otppass';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#404040',
            },
            '&:hover fieldset': {
              borderColor: '#90caf9',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        },
      },
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Forgotpassword = () => {
  const [open, setOpen] = useState(false);
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [state, setState] = useState({
    password: "",
    email: "",
    otp: "",
    newPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/forgotPassword", state)
      .then((Res) => {
        console.log(Res);
        setShowOtpFields(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} color="primary">
        Forgot Password
      </Button>
      <ThemeProvider theme={darkTheme}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            style: {
              borderRadius: '12px',
            },
          }}
        >
          <DialogTitle sx={{ 
            textAlign: 'center', 
            fontSize: '1.5rem',
            color: '#fff',
            borderBottom: '1px solid #404040'
          }}>
            Forgot Password
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: '#1e1e1e' }}>
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
              forgot password
                </Button>
              </Stack>
            </Box>
            
          </DialogContent>
          {showOtpFields && (
              <Otppass />
            )}
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default Forgotpassword;