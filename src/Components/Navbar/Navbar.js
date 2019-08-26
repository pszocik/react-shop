import React from "react";
import "typeface-roboto";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
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

const Navbar = () => {
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
          style={{
            fontFamily: "Garamond",
            letterSpacing: "5px",
            color: "black"
          }}
        >
          <Button className={classes.button} color="inherit">
            Login
          </Button>
          <Typography
            variant="h2"
            style={{ fontFamily: "Garamond", letterSpacing: "5px" }}
            className={classes.title}
          >
            Shop
          </Typography>
          <ShoppingBasketIcon className={classes.icon} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
