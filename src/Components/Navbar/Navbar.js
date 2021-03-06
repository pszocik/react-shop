import React from "react";
import "typeface-roboto";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    margin: 0,
    padding: 0
  },
  title: {
    flexGrow: 1
  },
  button: {
    padding: 0,
    fontSize: 23
  },
  icon: {
    width: "64px"
  }
}));

const Navbar = ({ togglePaymentPopUp, toggleSignUpForm }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          opacity: "0.9"
        }}
      >
        <Toolbar
          variant="h5"
          style={{
            fontFamily: "Garamond",
            letterSpacing: "2px",
            color: "black"
          }}
        >
          <Button
            className={classes.button}
            onClick={toggleSignUpForm}
            color="inherit"
          >
            Login
          </Button>
          <Typography
            variant="h4"
            style={{ fontFamily: "Garamond", letterSpacing: "3px" }}
            className={classes.title}
          >
            Stock Images Shop
          </Typography>
          <ShoppingBasketIcon
            className={`${classes.icon} navbar-basket`}
            onClick={togglePaymentPopUp}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
