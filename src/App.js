import React, {useState, useEffect} from "react";
import {
  CssBaseline,
  Container,
  Box
} from "@material-ui/core";
import WrapperBox from "./WrapperBox";
import Heading from "./Heading";
import Navigation from "./Navigation";
import DataDisplay from "./DataDisplay";
import data from "./data/data.json";

const dataKeys = Object.keys(data);

export default () => {
  const [activeTopic, setActiveTopic] = useState(dataKeys[0])
  return (
    <>
      <CssBaseline />
      <Container>
        <WrapperBox>
          <Box p={2}>
            <Heading
              heading="Smilecast"
              tag="Digitally casting a smile on your face"
            />
          </Box>
          <Box pb={2}>
            <Navigation setActiveTopic={setActiveTopic} />
          </Box>
          <Box p={4}>
            <DataDisplay category={activeTopic} />
          </Box>
        </WrapperBox>
      </Container>
    </>
  );
};
