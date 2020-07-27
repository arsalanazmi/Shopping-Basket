import React from "react";
import { about, Nike_Logo } from "../Images";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  heading: {
    color: "#e09f38",
    textDecoration: "underline",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  about: {
    width: "70%",
    margin: "0 auto",
  },
  logo: {
    height: "16em",
    padding: "2% 0",
    [theme.breakpoints.between(0, 350)]: {
      height: "6em",
    },
    [theme.breakpoints.between(351, 460)]: {
      height: "9em",
    },
    [theme.breakpoints.between(461, 650)]: {
      height: "10em",
    },
    [theme.breakpoints.between(651, 950)]: {
      height: "13em",
    },
  },
}));
const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={about} style={{ width: "100%" }} alt="abput" />
      <Typography variant="h3" className={classes.heading} gutterBottom>
        About Nike
      </Typography>
      <Typography className={classes.about} variant="subtitle1" gutterBottom>
        It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a
        track-and-field coach at the University of Oregon, and his former
        student Phil Knight. They opened their first retail outlet in 1966 and
        launched the Nike brand shoe in 1972. The company was renamed Nike,
        Inc., in 1978 and went public two years later. By the early 21st
        century, Nike had retail outlets and distributors in more than 170
        countries, and its logo—a curved check mark called the “swoosh”—was
        recognized throughout the world.
      </Typography>
      <img src={Nike_Logo} className={classes.logo} alt="Nike Logo"/>
      <Typography className={classes.about} variant="subtitle1" gutterBottom>
        Our mission is what drives us to do everything possible to expand human
        potential. We do that by creating groundbreaking sport innovations, by
        making our products more sustainably, by building a creative and diverse
        global team and by making a positive impact in communities where we live
        and work.
      </Typography>
    </div>
  );
};

export default About;