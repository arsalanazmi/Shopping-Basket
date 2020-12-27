import React from "react";
import { Carousel } from "react-bootstrap";
import { slider1, slider2, slider3, slider4, slider5 } from "../Images/";
import ShoeDesign from "../Json/ShoeDesign.json";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontWeight: "bold",
    color: "#6a7070",
    textDecoration: "underline",
    margin: "5% 0 3% 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
      margin: '5%'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      margin: '7%'
    },
  },
  heading: {
    fontWeight: "bold",
    color: "#4d6a6b",
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
      margin: '5%'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      margin: '7%'
    },
  },
  text: {
    margin: "0 auto",
    textAlign: "center",
    marginTop: "1%",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      width: "65%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      width: "75%",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3% 10% 0 10%",
    marginBottom: '10%',
    [theme.breakpoints.down("md")]: {
      padding: "3% 4%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3% 2%",
    },
  },
  card: {
    margin: "3%",
    [theme.breakpoints.between(0, 350)]: {
      margin: "2%",
    },
  },
  media: {
    height: 270,
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
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Carousel interval={2700} fade={true}>
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
              alt="Second slide"
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
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider"
              src={slider5}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <Typography variant="h1" className={classes.mainHeading}>
          Just Do It
        </Typography>

        <Typography variant="h4" className={classes.text}>
          Nike has been your companion in happiness, both big and small, for
          over 50 years. Our roots are firmly grounded in Pakistan and with its
          people.
        </Typography>

        <Typography variant="h2" className={classes.heading}>
          Latest Designs
        </Typography>

        <Grid className={classes.root} container>
          {Object.keys(ShoeDesign).map((keyName) => {
            const shoe = ShoeDesign[keyName];
            return (
              <Grid key={keyName} item xs={11} sm={6} md={3}>
                <Card className={classes.card} elevation={5}>
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