import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectProducts } from "../store";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 'bold',
    color: "#869ba0",
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3% 10% 0 10%",
    marginBottom:'5%',
    [theme.breakpoints.down("sm")]: {
      padding: "3% 2%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "3% 4%",
    },
  },
  card: {
    margin: "3%",
    [theme.breakpoints.between(0, 350)]: {
      margin: "2%",
    },
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("md")]: {
      height: 240,
    },
  },
  cardContent: {
    textAlign: "center",
    "&:hover": {
      color: "#8e8b8b",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      height: 50,
      marginTop: -10,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Product = () => {
  const classes = useStyles();

  // Select Data from redux store
  const products = useSelector(selectProducts);

  return (
    <div>
      <Typography variant="h3" className={classes.heading}>
        Product
      </Typography>

      <Grid className={classes.root} container>
        {products.map((product) => {
          let { id, name, img } = product;

          return (
            <Grid key={id} item xs={10} sm={6} md={4}>
              <Link to={`/product_details/${id}`} className={classes.link}>
                <Card className={classes.card} elevation={5}>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      component="h2"
                    >
                      {name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Product;