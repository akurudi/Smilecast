import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data/data.json";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    margin: "3px",
    padding: "1px 5px",
    lineHeight: "13px",
    color: "white",
    "&$selected": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    },
    "&$selected:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    }
  },
  selected: {
    color: "yellow"
  }
}));

const dataKeys = Object.keys(data);

const Navigation = ({ setActiveTopic }) => {
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
      <Grid item>
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
                root: classes.root,
                selected: classes.selected
              }}
            >
              {data[key]}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

Navigation.propTypes = {
  setActiveTopic: PropTypes.func.isRequired
}

export default Navigation;