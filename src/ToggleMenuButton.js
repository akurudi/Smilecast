import React, { useState, useEffect } from "react";
import { ToggleButton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data/data.json";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    margin: "2px",
    color: "white",
    "&$selected": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white"
    },
    "&$selected:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white"
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white"
    }
  },
  selected: {
    color: "yellow"
  }
}));

const menuItems = Object.values(data);

export default () => {
  const classes = useStyles();
  return (
    <>
      {menuItems.map(item => (
        <ToggleButton
          variant="contained"
          color="secondary"
          component="button"
          key={item}
          value={item}
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            selected: classes.selected // class name, e.g. `classes-nesting-label-x`
          }}
        >
          {item}
        </ToggleButton>
      ))}
    </>
  );
};
