import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: "40%",
    backgroundColor: "#e5e3e3",
    margin: "10% auto",
    padding: "2%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      margin: "10% auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "12% auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      margin: "13% auto",
    },
  },
  thankYou: {
    color: "green",
    fontWeight:'bold',
    padding: '10px',
  },
  dontWorry: {
    color: "rgb(46, 35, 35)",
    fontWeight:'bold',
  },
}));

const PlaceOrder = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.Paper} elevation={5}>
      <Typography variant="h4" className={classes.thankYou}>
        Thank you for your order
      </Typography>
      <Typography variant="h5">
        Your order number is <strong>#2001539</strong>. We have emailed your
        order confirmation, and will send you an update when your order has
        shipped.
      </Typography>
      <br />
      <Typography variant="h4" className={classes.dontWorry}>
        Don't worry it's just a template !
      </Typography>
      <br />
    </Paper>
  );
};

export default PlaceOrder;