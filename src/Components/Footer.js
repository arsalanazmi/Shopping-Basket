import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding:"5% 1% 1% 1%",
    color: "#6e797a",
    [theme.breakpoints.between(0, 650)]: {
      flexDirection:'column',
      textAlign:'center',
    },
  },
  heading: {
    [theme.breakpoints.between(0,768)]: {
      fontSize: '16px',
    },
  },
  anchorTag: {
    color: "#6f6f70",
    textDecoration: "none",
    "&:hover": {
      color: "#6f6f70",
    },
  },
  icon: {
    position:'relative',
    bottom:4,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.heading}>
        Copyright &copy; 2020
      </Typography>
      <Typography variant="h6" className={classes.heading}>
        <span className={classes.github}>
          Follow on: {""}
          <a
            className={classes.anchorTag}
            href="https://github.com/arsalanazmi/Nike-Shoe-Store.git"
          >
            Github <GitHubIcon className={classes.icon} />
          </a>
        </span>
      </Typography>
      <Typography variant="h6" className={classes.heading}>
        Powered By: Arsalan Raza Azmi
      </Typography>
    </div>
  );
};

export default Footer;