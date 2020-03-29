import React from "react";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
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
      <Typography className={classes.root} variant="h2" align="center" color="secondary">
        {heading}
      </Typography>
      <Typography className={classes.secondary} variant="body2" align="center" color="textPrimary">
        {tag}
      </Typography>
      <hr />
    </>
  );
};

Heading.prototypes = {
  heading: PropTypes.string.isRequired,
  tag: PropTypes.string
}

export default Heading;