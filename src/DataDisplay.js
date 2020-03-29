import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Typography, Button, Grid, Box } from "@material-ui/core";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import WrapperBox from "./WrapperBox";
import ImageResult from "./ImageResult";
import TextResult from "./TextResult";
import fetchAPI from "./fetchApi";

const title = {
  dad: "Dad Jokes",
  geek: "Jokes For Geeks",
  ron: "Ron Swanson Quotes",
  chuck: "Chuck Norris Facts",
  cat: "Meeow!"
};

const DataDisplay = ({ category }) => {
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const fetchData = () => {
    setLoaded(false);
    fetchAPI(category)
      .then(result => {
        setLoaded(true);
        setMessage(result);
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    setLoaded(false);
    fetchAPI(category)
      .then(result => {
        setLoaded(true);
        setMessage(result);
      })
      .catch(err => {
        console.error(err);
      });
  }, [category]);
  return (
    <WrapperBox elevation={10}> 
      <Box p={2}>
        <Typography variant="h4" align="center" gutterBottom>
          {title[category]}
        </Typography>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            {category === "cat" ? (
              <ImageResult imgSrc={message} loaded={loaded} />
            ) : (
              <TextResult text={message} loaded={loaded} />
            )}
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="outlined"
              startIcon={<ShuffleIcon />}
              onClick={fetchData}
              color="secondary"
            >
              Random
            </Button>
          </Grid>
        </Grid>
      </Box>
    </WrapperBox>
  );
};

DataDisplay.propTypes = {
  category: PropTypes.string.isRequired
}

export default DataDisplay;
