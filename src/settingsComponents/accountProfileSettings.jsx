import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1000px",
    flexGrow: 1,
    boxSizing: "border-box"
  },
  accordion: {
    marginBottom: "5px",
    border: "0.5px solid #999999",
    backgroundColor: "#FAFBFC"
  },
  heading: {
    fontSize: "12px",
    flexShrink: 0
  },
  detail: {
    position: "relative",
    marginRight: "10px",
    borderTop: "0.5px solid #999999",
    fontSize: "12px"
  },
  edithIcon: {
    position: "absolute",
    marginTop: "20px",
    marginRight: "20px",
    right: "20px"
  },
  prefix: {
    marginBottom: "30px",
    marginLeft: "20px",
    marginTop: "20px"
  },
  subtitle: {
    fontSize: "12px",
    color: "gray"
  }
}));

const AccountProfileSettings = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <h5> Account Profile Settings</h5>
      <div className={classes.root}>
        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              Personal settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div style={{ fontSize: "12px" }}>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Prefix</Typography>
                <Typography>Mr.</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>First Name</Typography>
                <Typography>Frimpong-Adrian</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Middle Name
                </Typography>
                <Typography>Mensah</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Last Name</Typography>
                <Typography>Brown</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Email</Typography>
                <Typography>Frimpongbrown@gmail.com</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Date of Birth
                </Typography>
                <Typography>10/11/1984</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Gender</Typography>
                <Typography>Male</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Marital Status
                </Typography>
                <Typography>Single</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Nationality
                </Typography>
                <Typography>Ghanaian</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Occupation</Typography>
                <Typography>Self-Employed</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              Contact Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Country</Typography>
                <Typography>Ghana</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>State</Typography>
                <Typography>Grater Accra Region</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>City</Typography>
                <Typography>Accra</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Address</Typography>
                <Typography>
                  20, Prof Sir Acheampong Street, Plot 29 Block 1 Old Ahinsan
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Phone Verification
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Phone Number
                </Typography>
                <Typography>+233 55 789 654 890</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>Status</Typography>
                <Typography>Verified</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              Proof of Identification
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Means of Identification
                </Typography>
                <Typography>National ID</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Identification Number
                </Typography>
                <Typography>A123456789</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Expiry Date
                </Typography>
                <Typography>10/12/2023</Typography>
              </div>
              <img
                className={classes.prefix}
                style={{ height: "150px", width: "300px" }}
                src="card.png"
                alt=""
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>Financial Goals</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  What is your primary financial goal?
                </Typography>
                <Typography>Wealth Preservation</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  What time do you want to achieve your goal?
                </Typography>
                <Typography>1 - 3 years</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Which of the following best describes your financial goals
                </Typography>
                <Typography>
                  Preseriving capital and earning a moderate amount of current
                  income
                </Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  With the income generated from your portfollo, you plan to:
                </Typography>
                <Typography>Use it for living expenses</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  which of the following statements would best describe your
                  reaction, if the value of your partfolio were to suddenly
                  decreased?
                </Typography>
                <Typography>
                  I would be concerned about the value of my portfolio
                  decreasing
                </Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  How optinistic are you about the prospects for
                  emerging/frontier economics
                </Typography>
                <Typography>Optimistic</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Which of the following best describes your attitude about
                  investments in emerging/frontier markers?
                </Typography>
                <Typography>
                  I believe developed markets and emerging fronntier markets are
                  inerdependent
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>
              Trading Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <IconButton className={classes.edithIcon}>
              <EditIcon />
            </IconButton>
            <div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Have you bought a treasury bill, note or bond before?
                </Typography>
                <Typography>Yes</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  If yes, how long ago?
                </Typography>
                <Typography>6 months - 1 year</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Qhat security was it?
                </Typography>
                <Typography>Derivatives</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  Have you ever invested/speculated in the financial market in a
                  frontier/emerging marker?
                </Typography>
                <Typography>Yes</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  If yes, which market was it?
                </Typography>
                <Typography>USA, China</Typography>
              </div>
              <div className={classes.prefix}>
                <Typography className={classes.subtitle}>
                  How often do you trade in this market?
                </Typography>
                <Typography>1 - 5 times a year</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default AccountProfileSettings;
