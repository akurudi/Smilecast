import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "'Frijole', cursive"
  },
  secondary: {
    fontFamily: "'Special Elite', cursive"
  }
}));

const Heading = ({ heading, tag }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs="auto">
          <Typography
            className={classes.root}
            variant="h3"
            align="center"
            color="secondary"
          >
            {heading}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.secondary}
            variant="body2"
            align="center"
            color="textPrimary"
          >
            {tag}
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

Heading.prototypes = {
  heading: PropTypes.string.isRequired,
  tag: PropTypes.string
};

export default Heading;
