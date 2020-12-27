import React, { useState } from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { makeStyles, Divider } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { logo } from "../Images/index";
import { ShoppingBasket } from "../Images";

const styles = {
  navBar: {
    top: "64px",
    backgroundColor: "#dddddd",
  },
};

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider>
      <div
        style={{
          position: "sticky",
          zIndex: 999,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "63px",
        }}
      >
        <AppBar
          zDepth={3}
          style={{ backgroundColor: "#4a4f4d" }}
          title="Nike Shoes"
          iconElementLeft={
            <FontIcon
              onClick={() => {
                setOpen(!open);
              }}
              style={{ paddingTop: "20%", cursor: "pointer" }}
              className="material-icons"
            >
              menu
              <img
                src={logo}
                alt="Logo"
                width="40"
                height="30"
                className="logo"
              />
            </FontIcon>
          }
        />
        ;
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}
        >
          <Drawer open={open} width={250} containerStyle={styles.navBar}>
            <Link to="/" className={classes.link}>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Home
              </MenuItem>
            </Link>
            <Link to="/about" 
            className={classes.link}>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                }}
              >
                About
              </MenuItem>
            </Link>
            <Divider />
            <Link to="/product" className={classes.link}>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Product
              </MenuItem>
            </Link>
            <Link to="/shopping_basket" className={classes.link}>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Shopping Basket{" "}
                <img
                  height="35"
                  src={ShoppingBasket}
                  alt="Shopping Basket"
                  title="Shopping Basket"
                />{" "}
              </MenuItem>
            </Link>
          </Drawer>
        </ClickAwayListener>
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
