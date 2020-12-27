import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddToCard } from "../Images";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { store, add, selectProducts } from "../store";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
  content: {
    marginTop: "7%",
    [theme.breakpoints.down("sm")]: {
      padding: "2% 6%",
      fontSize: "1%",
      marginBottom:'17%',
    },
  },
  heading: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "46px",
    },
  },
  button: {
    marginTop: "2%",
    "&:focus": {
      outline: "none",
    },
  },
}));

const ProductDetails = () => {
  const classes = useStyles();

  const { productId } = useParams();

  // Select Data from redux store
  const products = useSelector(selectProducts);
  const product = products[productId - 1];
  const { name, img, price, color } = product;

  if (!product)
    return <Typography variant="h2">{product} Not Found!</Typography>;

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className="p-5">
          <img src={img} alt={name} className={classes.img} />
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        container
        className={classes.content}
        direction="column"
      >
        <Grid item>
          <Typography variant="h2" className={classes.heading} gutterBottom>
            {name}
          </Typography>

          <Typography variant="h5" gutterBottom>
            Price:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            $ {price}
          </Typography>

          <Typography variant="h5" gutterBottom>
            Colors Available:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {color}
          </Typography>

          <Typography variant="h5" gutterBottom>
            Description About Shoe:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            In our modern world, culture and technology exist intertwined.
            Technology advances and culture shifts. Culture blooms and
            technology adapts. The {name} story is similar: always innovating,
            creating cutting-edge styles Shoes. Built with breathable mesh and a
            state-of-the-art midsole, they keep you comfortable in an
            ever-changing world.
          </Typography>

          <Link to="/shopping_basket" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                store.dispatch(add(product));
              }}
            >
              Add To Cart
              <img
                height="35"
                src={AddToCard}
                alt="add to cart"
                title="Add To Cart"
              />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;