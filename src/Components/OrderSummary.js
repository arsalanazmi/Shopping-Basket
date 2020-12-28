import React, { useContext } from "react";
import { ShippingContext } from "../CartContext";
import { Link } from "react-router-dom";
import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectProducts } from "../store";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: "40%",
    backgroundColor: "#e5e3e3",
    margin: "1% auto",
    padding: "2%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      margin: "2% auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2% auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      margin: "2% auto",
    },
  },
  heading: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  list: {
    boxSadow: "2px 2px 2px rgb(79, 80, 87)",
    margin: "15px 0",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.1rem",
    padding: "3px",
  },
  left: {
    textAlign: "left",
    display: "inline-block",
  },
  right: {
    textAlign: "right",
    display: "inline-block",
  },
  shippingContainer: {
    width: "80%",
    padding: "2% 0 0 0",
    margin: "0 auto",
    backgroundColor: "#efeaea",
  },
  button: {
    margin: "1%",
    "&:focus": {
      outline: "none",
    },
  },
}));

const OrderSummary = () => {
  const classes = useStyles();

  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);
  let totalAmount = useSelector(selectTotalAmount);

  // Use Context
  const ShippingState = useContext(ShippingContext);

  // Shipping state
  const {
    first_name,
    last_name,
    address,
    city,
    state,
    country,
    zip_code,
  } = ShippingState[0];

  return (
    <Paper className={classes.Paper} elevation={5}>
      <Typography variant="h2" className={classes.heading}>
        Order Summary
      </Typography>
      <br />

      {/* Items */}

      {cartProducts.map((product, index) => {
        let { id, name, price, quantity } = product;

        return (
          <div key={id} className={classes.list}>
            <Typography variant="h6" className={classes.left}>
              {index + 1}.&nbsp; {name} (
              <span className="item-quantity">{quantity}</span>)
            </Typography>

            <Typography variant="h6" className={classes.right}>
              <strong>${price}</strong>
            </Typography>
            <br />
          </div>
        );
      })}

      {/* Delivery */}
      <>
        <br />
        <Typography variant="h6" className={classes.left}>
          Delivery:
        </Typography>{" "}
        <Typography variant="h6" className={classes.right}>
          <strong>Free</strong>
        </Typography>
        <br />
      </>

      {/* Total */}

      <>
        <Typography variant="h6" className={classes.left}>Total:</Typography>{" "}
        <Typography variant="h6" className={classes.right}>
          <strong>${totalAmount}</strong>
        </Typography>
        <br />
        <br />
      </>

      {/* Shipping Details */}

      <Paper className={classes.shippingContainer} elevation={5}>
        <Typography variant="h4" className={classes.heading}>
          ( Shipping Details )
        </Typography>
        <br />
        <Typography variant="h6">
          {first_name} {last_name}
        </Typography>
        <br />
        <Typography variant="h6">
          {address}, {city}, {state}, {zip_code}, {country}{" "}
        </Typography>
        <br />
        <Typography>Payment: "Cash On Delivery"</Typography>
        <br />
      </Paper>

      <br />
      <Link to="/checkout">
        <Button variant="contained" className={classes.button} color="primary">
          Back
        </Button>
      </Link>
      <Link to="/placeorder">
        <Button variant="contained" className={classes.button} color="primary">
          Place Order
        </Button>
      </Link>
    </Paper>
  );
};

export default OrderSummary;