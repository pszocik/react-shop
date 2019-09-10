import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./Footer.css";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={"BottomNavigation" + classes.root}
    >
      <h4>Copyright © 2019 Piotr Szocik</h4>
    </BottomNavigation>
  );
};

export default Footer;
