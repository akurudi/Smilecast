import React from "react";
import { Typography } from "@material-ui/core";

export default ({ heading, tag }) => {
  return (
    <>
      <Typography variant="h4" align="center" color="primary">
        {heading}
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary">
        {tag}
      </Typography>
      <hr />
    </>
  );
};
