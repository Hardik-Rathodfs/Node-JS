import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import Forgotpassword from "./Forgotpassword";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popover = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  console.log(state);
  const handleSubmit = (e) => {
    
    e.preventDefault();
    fetch(`https://blogapp-backend-hpen.onrender.com/changepassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),

    })
      .then((Res) => Res.json())
      .then((Res) => {
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h6 onClick={handleClickOpen} style={{fontSize:"15px", color:"sky" , textAlign:"center"}}>Change Your Password</h6>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              // margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
            
            />
            <TextField
              required
              // margin="dense"
              name="oldpassword"
              label="Old Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              
            />
            <TextField
              required
              // margin="dense"
              name="newpassword"
              label="New Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              // margin="dense"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
        
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
          <br />
          <Forgotpassword />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popover;
