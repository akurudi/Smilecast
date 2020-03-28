import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
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

const dataKeys = Object.keys(data);

export default ({setActiveTopic}) => {
  const classes = useStyles();
  const [active, setActive] = useState(dataKeys[0]);
  const handleChange = (event, active) => {
    if (active !== null) {
      setActive(active);
      setActiveTopic(active);
    }
  };
  return (
    <Grid container justify="center" spacing={1} alignItems="center">
      <ToggleButtonGroup
        size="small"
        exclusive
        onChange={handleChange}
        value={active}
      >
        {dataKeys.map(key => (
          <ToggleButton
            variant="contained"
            color="secondary"
            component="button"
            key={key}
            value={key}
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              selected: classes.selected // class name, e.g. `classes-nesting-label-x`
            }}
          >
            {data[key]}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Grid>
  );
};
