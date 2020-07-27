import React from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { slider1, slider2, slider3, slider4, slider5 } from "../Images/";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    color: '#6a7070',
    textDecoration:'underline',
    marginTop:'5%',
    textAlign:'center',
  },
  heading: {
    color: "#4d6a6b",
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  root: {
    padding: "3% 10% 0 10%",
    [theme.breakpoints.down("sm")]: {
      padding: "3% 2%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "3% 4%",
    },
  },
  card: {
    margin: "3%",
    width: '90%',
    [theme.breakpoints.between(0, 350)]: {
      margin: "2%",
    },
  },
  media: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
    [theme.breakpoints.down("md")]: {
      height: 140,
    },
  },
  cardContent: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      height: 50,
      marginTop: -10,
    },
  },
  button: {
    margin: "0 auto",
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const Men = {
    air_max_270_g: {
      name: "Air Max 270-G",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/626beac1-c764-4941-b907-db79a20bc5fd/air-max-270-g-golf-shoe-gTpCFg.jpg",
    },
    downshifter_10: {
      name: "Downshifter-10",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7c94e2d-e35f-4c1b-a8db-20b1563143b9/downshifter-10-running-shoe-QL0NBl.jpg",
    },
    kd13: {
      name: "KD-13",
      "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58303425-b100-41a9-b6aa-dd5264c1bd2f/kd13-basketball-shoe-Bngc7j.jpg",
    },
  };

  const Women = {
    air_zoom_pegasus_37: {
      name: "Air Zoom Pegasus-37",
      "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ab7d07a-ce93-4c05-af85-d74371472c82/air-zoom-pegasus-37-running-shoe-qVSCSr.jpg",
    },
    air_zoom_superrep: {
      name: "Air Zoom SuperRep",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f0ceca88-38e6-4877-844a-84c9e738d6e9/air-zoom-superrep-hiit-class-shoe-PmHJhh.jpg",
    },
    daybreak: {
      name: "Daybreak",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c358caa2-ac12-42bb-8641-302e63b704f9/daybreak-shoe-djt0cf.jpg",
    },
  };

  const Kids = {
    zoom_flight: {
      name: "Zoom Flight",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67dd405d-e91e-4492-8a80-58410c5625c7/zoom-flight-older-basketball-shoe-FG7pVN.jpg",
    },
    air_zoom_speed: {
      name: "Air Zoom Speed",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/695f645c-bce9-4421-a923-cd68e3980249/air-zoom-speed-younger-older-running-shoe-JnhB6z.jpg",
    },
    air_force_1_lv8_1: {
      name: "Air Force-1-LV8-1",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dfe96763-ea9a-4ea7-896f-933e205cf5f6/air-force-1-lv8-1-older-shoe-jR0N2F.jpg",
    },
  };

  return (
    <div className={classes.slides}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slider2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={slider5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div>
        <Typography variant="h3" className={classes.mainHeading}>
          New Arrival
        </Typography>

        <Typography variant="h4" className={classes.heading}>
          Men Shoes
        </Typography>

        <Grid className={classes.root} container>
          {Object.keys(Men).map((keyName) => {
            const shoe = Men[keyName];
            return (
              <Grid key={keyName} item xs={6} sm={4} md={4}>
                <Card className={classes.card} elevation={4}>
                  <CardMedia
                    className={classes.media}
                    image={shoe.img}
                    title={shoe.name}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      component="h2"
                    >
                      {shoe.name}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Link to={`/products/men_shoes/${keyName}`} className={classes.button}>
                    <Button variant="contained" className={classes.button}>
                      More Details
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Typography variant="h4" className={classes.heading}>
          Women Shoes
        </Typography>

        <Grid className={classes.root} container>
          {Object.keys(Women).map((keyName) => {
            const shoe = Women[keyName];
            return (
              <Grid key={keyName} item xs={6} sm={4} md={4}>
                <Card className={classes.card} elevation={4}>
                  <CardMedia
                    className={classes.media}
                    image={shoe.img}
                    title={shoe.name}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      component="h2"
                    >
                      {shoe.name}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Link to={`/products/women_shoes/${keyName}`}className={classes.button} >
                    <Button variant="contained" className={classes.button}>
                      More Details
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Typography variant="h4" className={classes.heading}>
          Kids Shoes
        </Typography>

        <Grid className={classes.root} container>
          {Object.keys(Kids).map((keyName) => {
            const shoe = Kids[keyName];
            return (
              <Grid key={keyName} item xs={6} sm={4} md={4}>
                <Card className={classes.card} elevation={4}>
                  <CardMedia
                    className={classes.media}
                    image={shoe.img}
                    title={shoe.name}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      component="h2"
                    >
                      {shoe.name}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Link to={`/products/kids_shoes/${keyName}`} className={classes.button}>
                    <Button variant="contained" className={classes.button}>
                      More Details
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Home;