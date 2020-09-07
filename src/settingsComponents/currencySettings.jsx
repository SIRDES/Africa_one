import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "GH",
    label: "GH₵"
  },
  {
    value: "USD",
    label: "USD $"
  },
  {
    value: "EUR",
    label: "EUR €"
  },
  {
    value: "BTC",
    label: "BTC ฿"
  },
  {
    value: "JPY",
    label: "JPY ¥"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "50ch",
      marginTop: "10px",
      marginLeft: "20px"
    }
  },
  label: {
    marginTop: "70px",
    marginLeft: "20px",
    opacity: "0.5"
  }
}));

const CurrencySettings = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("GH");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <h5>Currency Settings</h5>
      <h5 className={classes.label}> Select your default Currency </h5>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            size="small"
            value={currency}
            onChange={handleChange}
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </>
  );
};
export default CurrencySettings;
