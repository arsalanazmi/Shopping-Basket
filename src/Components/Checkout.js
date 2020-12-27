import React, { useContext } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { ShippingContext } from "../CartContext";
import { Link, useHistory } from "react-router-dom";
import {
  makeStyles,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: "7% auto",
    width: "30%",
    backgroundColor: "#e5e3e3",
    padding: "1%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      margin:'2% auto'
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin:'2% auto'
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin:'2% auto'
    },
  },
  heading: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  form: {
    margin: "5% ",
  },
  input: {
    fontSize: "16px",
    margin: "5px",
    padding: "1%",
    "&:focus": {
      outline: "none",
    },
  },
  backButton: {
    margin: "1%",
    "&:focus": {
      outline: "none",
    },
  },
  submitButton: {
    "&:focus": {
      outline: "none",
    },
  },
}));

const Checkout = () => {
  const classes = useStyles();

  // Create Shipping Context
  const [ShippingState, setShippingContext] = useContext(ShippingContext);
  let history = useHistory();

  // Use Form
  const { register, handleSubmit } = useForm();

  // Handle Submit
  const onSubmit = (data) => {
    setShippingContext(data);
    history.push("/order_summary");
  };

  // ...

  return (
    <Paper className={classes.Paper} elevation={5}>
      <Typography variant="h2" className={classes.heading}>
        Checkout
      </Typography>
      <form name="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <br />
        <legend>User Info</legend>
        <fieldset className={classes.form}>
          <input
            name="first_name"
            autoFocus
            ref={register}
            className={classes.input}
            required
            placeholder="First Name"
          />
          <input
            name="last_name"
            ref={register}
            className={classes.input}
            required
            placeholder="Last Name"
          />
          <input
            name="address"
            ref={register}
            className={classes.input}
            required
            placeholder="Address"
          />
          <input
            name="email"
            ref={register}
            className={classes.input}
            required
            placeholder="Email"
          />
          <input
            name="city"
            ref={register}
            label="City"
            className={classes.input}
            required
            placeholder="City"
          />
          <input
            name="state"
            ref={register}
            className={classes.input}
            required
            placeholder="State/Province/Region"
          />
          <input
            type="number"
            name="zip_code"
            ref={register}
            className={classes.input}
            required
            placeholder="Zip Code"
          />
          <input
            name="country"
            ref={register}
            className={classes.input}
            required
            placeholder="Country"
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked name="payment_method" />}
            label={
              <span style={{ fontSize: "0.7rem" }}>
                Payment is Cash on Delivery only
              </span>
            }
          />
          <br />
          <Link to="/shopping_basket">
            <Button
              variant="contained"
              color="primary"
              className={classes.backButton}
            >
              Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submitButton}
          >
            Submit and proceed
          </Button>
        </fieldset>
      </form>
    </Paper>
  );
};

export default Checkout;