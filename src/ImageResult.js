import React from "react";
import PropTypes from 'prop-types';
import { Grid, Box } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageResult = ({ imgSrc, loaded }) => {
  return (
    <Grid container justify="center">
      <Box minHeight={400}>
        <Grid item xs={10}>
          {loaded && (
            <LazyLoadImage
              alt="cat"
              src={imgSrc}
              height="350px"
              effect="blur"
            />
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

ImageResult.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  loaded: PropTypes.bool
}

export default ImageResult;
