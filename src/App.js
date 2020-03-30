import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { CssBaseline, Container, Box } from "@material-ui/core";
import WrapperBox from "./WrapperBox";
import Heading from "./Heading";
import Navigation from "./Navigation";
import DataDisplay from "./DataDisplay";
import data from "./data/data.json";

const dataKeys = Object.keys(data);

export default () => {
  const [activeTopic, setActiveTopic] = useState(dataKeys[0]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <WrapperBox elevation={0}>
          <Box p={3}>
            <Heading
              heading="Smilecast"
              tag="Digitally casting a smile on your face"
            />
          </Box>
          <Navigation setActiveTopic={setActiveTopic} />
          <Box p={2}>
            <DataDisplay category={activeTopic} />
          </Box>
        </WrapperBox>
      </Container>
    </ThemeProvider>
  );
};
