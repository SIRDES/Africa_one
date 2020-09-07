import React from "react";
import {
  Tabs,
  Tab,
  makeStyles,
  withStyles,
  Typography,
  Button
} from "@material-ui/core";
import AccountsProfileSettings from "./settingsComponents/accountProfileSettings";
import PasswordSettings from "./settingsComponents/passwordSettings";
import CurrencySettings from "./settingsComponents/currencySettings";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: "#fff"
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    borderBottom: "1px solid #e8e8e8",
    fontSize: "12px",
    opacity: 1,
    textAlign: "center",
    paddingLeft: "12px",

    "&$selected": {
      borderLeft: "10px solid  #151515",
      backgroundColor: "#f4f4f4"
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginTop: "50px",
    width: "1200px",
    minHeight: "500px",
    backgroundColor: "#fff"
  },
  container: {
    marginTop: "70px",
    marginRight: "50px",
    marginLeft: "100px",
    marginBottom: "40px"
  },
  demo1: {
    borderLeft: "1px solid #f4f4f4",
    padding: "20px"
  },
  demo2: {
    display: "flex"
  },
  settingsTitle: {
    flex: 1,
    fontSize: "16px"
  },
  btn: {
    padding: "4px",
    textTransform: "none",
    fontSize: "12px"
  }
}));

function App() {
  const classes = useStyles();
  const [selectedTab, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.demo2}>
          <Typography className={classes.settingsTitle}>Settings</Typography>
          <Button className={classes.btn} variant="outlined">
            <ArrowBackIcon />
            Go Back Home
          </Button>
        </div>

        <div className={classes.root}>
          <AntTabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleChange}
          >
            <AntTab label="Accounts Profile Settings" />
            <AntTab label="Password Settings" />
            <AntTab label="Currency Settings" />
          </AntTabs>
          <div className={classes.demo1}>
            {selectedTab === 0 && <AccountsProfileSettings />}
            {selectedTab === 1 && <PasswordSettings />}
            {selectedTab === 2 && <CurrencySettings />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
