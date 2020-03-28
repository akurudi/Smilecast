import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";

const fetchData = category => {
  fetch("/.netlify/functions/getTodos")
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err);
    });
};

export default ({ category }) => {
  useEffect(() => {
    fetchData(category);
  }, [category]);
  return (
    <Grid container justify="center" spacing={1} alignItems="center">
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Chuck Norris can get to the center a Tootsie Pop, in just one
              lick.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              Random
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
