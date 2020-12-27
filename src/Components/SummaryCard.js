import React from "react";
import green from "@material-ui/core/colors/green";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { margin: "2% auto", textAlign: "center", backgroundColor: "grey" },
  card: { backgroundColor: "#e5e3e3" },
  title: { fontWeight: "bold", textDecoration: "underline" },
  button: {
    margin: "2% 0 0 0",
    backgroundColor: green[600],
    color: "white",
    "&:hover": {
      backgroundColor: green[800],
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function SummaryCard({ items, amount }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12} sm={8} md={6}>
      <Card className={classes.card} variant="elevation" elevation={8}>
        <CardContent>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Order Summary
          </Typography>

          <Typography variant="h6" color="textSecondary">
            Total Items : <strong>{items}</strong>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Total Amount : <strong>${amount}</strong>
          </Typography>

          {amount > 0 && (
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button variant="contained" className={classes.button}>
                Proceed to Checkout
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
