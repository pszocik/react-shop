import React from "react";
import "typeface-roboto";

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
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#354e82",
          opacity: "0.9"
        }}
      >
        <Toolbar>
          <Button
            style={{
              fontFamily: "Garamond",
              letterSpacing: "5px"
            }}
            color="inherit"
          >
            Login
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography
            variant="h3"
            style={{ fontFamily: "Garamond", letterSpacing: "5px" }}
            className={classes.title}
          >
            Shop
          </Typography>
          <ShoppingBasketIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
