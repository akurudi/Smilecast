import React from "react";
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const WrapperBox = ({ children, elevation }) => (
  <Box p={1}>
    <Paper elevation={elevation}>{children}</Paper>
  </Box>
);
WrapperBox.propTypes  = {
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number
}
export default WrapperBox;