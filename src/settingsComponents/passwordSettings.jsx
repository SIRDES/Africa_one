import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "50ch",
      marginLeft: "20px"
    }
  },
  label: {
    marginTop: "35px",
    marginLeft: "20px"
  },
  btn: {
    width: "50ch",
    opacity: "0.5",
    textTransform: "none",
    marginTop: "30px",
    marginLeft: "20px",
    marginBottom: "30px"
  }
}));
const PasswordSetting = () => {
  const classes = useStyles();

  return (
    <>
      <h4>Password settings</h4>
      <p>Fill the form below to change your password</p>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <h5 className={classes.label}>Enter old password</h5>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your password here"
          />
        </div>
        <div>
          <h5 className={classes.label}>Enter new password</h5>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your password here"
          />
        </div>
        <div>
          <h5 className={classes.label}>Confirm new password</h5>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your password here"
          />
        </div>
        <Button size="large" className={classes.btn}>
          Save Password
        </Button>
      </form>
    </>
  );
};

export default PasswordSetting;
