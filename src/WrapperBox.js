import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export default ({ children }) => (
  <Box p={1}>
    <Paper elevation={2}>{children}</Paper>
  </Box>
);