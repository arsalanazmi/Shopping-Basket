import React, { useEffect } from "react";
import SummaryCard from "./SummaryCard";
import { clearCartImage } from "../Images";
import red from "@material-ui/core/colors/red";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import {
  store,
  remove,
  emptyCart,
  selectProducts,
  selectTotalItems,
  setTotalItems,
  selectTotalAmount,
  setTotalAmount,
  incrementProduct,
  decrementProduct,
} from "../store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin:'1% 0 3% 0',
  },
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "2%",
    [theme.breakpoints.between(0, 350)]: {
      margin: "2%",
    },
  },
  text: {
    fontWeight: "bold",
  },
  item: {
    fontSize: "20px",
  },
  itemVariableButton: {
    "&:focus": {
      outline: "none",
    },
  },
  quantity: {
    textAlign: "center",
    width: "15%",
    padding: "2%",
    margin: "1%",
    position: "relative",
    top: "2px",
    backgroundColor: "#e5e3e3",
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("md")]: {
      height: 260,
    },
  },
  removeButton: {
    color: "white",
    backgroundColor: red[400],
    "&:hover": {
      backgroundColor: red[500],
    },
  },
  emptyButton: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    marginBottom: "5%",
    textAlign: "center",
    color: "white",
    backgroundColor: red[400],
    "&:hover": {
      backgroundColor: red[500],
    },
  },
}));

const ShoppingBasket = () => {
  const classes = useStyles();

  // Get total Items from store
  let totalItems = useSelector(selectTotalItems);
  // Get total Amount from store
  let totalAmount = useSelector(selectTotalAmount);
  // Get products from store
  const products = useSelector(selectProducts);
  // Filter Cart products
  const cartProducts = products.filter((product) => product.added);
  // Set total Items
  store.dispatch(setTotalItems(cartProducts.length));

  // Calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let { price, quantity } = product;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  // Use Effect
  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <div>
      <SummaryCard items={totalItems} amount={totalAmount} />

      {/* Get Products */}
      {cartProducts.length > 0 && (
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            marginTop: "2%",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Your Products
        </Typography>
      )}
      <Grid className={classes.root} container>
        {products
          .filter((product) => product.added)
          .map((product) => {
            let { id, name, img, price, quantity } = product;

            // If Quantity is > 0
            if (quantity > 0) {
              return (
                <Grid key={id} item xs={11} sm={6} md={4}>
                  <Card className={classes.card} elevation={5}>
                    <CardContent>
                      <Typography variant="h5" className={classes.text}>
                        {name}{" "}
                      </Typography>
                      <Typography variant="h6" className={classes.text}>
                        {" "}
                        ${price}{" "}
                      </Typography>
                      <label htmlFor="quantity" className={classes.item}>
                        Items
                      </label>{" "}
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.itemVariableButton}
                        onClick={() =>
                          store.dispatch(incrementProduct(product))
                        }
                      >
                        +
                      </Button>
                      <input
                        readOnly
                        className={classes.quantity}
                        maxLength="3"
                        type="text"
                        id="quantity"
                        value={quantity}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.itemVariableButton}
                        onClick={() =>
                          store.dispatch(decrementProduct(product))
                        }
                      >
                        -
                      </Button>
                    </CardContent>

                    <CardMedia
                      className={classes.media}
                      image={img}
                      title={name}
                    />

                    <Button
                      variant="contained"
                      className={classes.removeButton}
                      onClick={() => store.dispatch(remove(product))}
                    >
                      Remove
                    </Button>
                  </Card>
                </Grid>
              );
            } else {
              store.dispatch(remove(product));
              return null;
            }
          })}
      </Grid>

      {/* Empty Cart button */}
      {cartProducts.length > 0 && (
        <div>
          {" "}
          <Button
            variant="contained"
            className={classes.emptyButton}
            onClick={() => store.dispatch(emptyCart(products))}
          >
            Empty Cart
            <img
              height="35"
              src={clearCartImage}
              alt="Empty Cart"
              title="Empty Cart"
            />{" "}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ShoppingBasket;