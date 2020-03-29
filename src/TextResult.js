import React from "react";
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const TextResult = ({ text, loaded }) => {
  return (
    <Grid container justify="center">
      <Box minHeight={80}>
        <Grid item xs="auto">
          {loaded ? (
            <Typography variant="body1" align="center" gutterBottom>
              {text}
            </Typography>
          ) : (
            <>
              <Skeleton variant="text" width={600} animation="wave" />
              <Skeleton variant="text" width={600} animation="wave" />
            </>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

TextResult.propTypes = {
  text: PropTypes.string.isRequired,
  loaded: PropTypes.bool
}

export default TextResult;