import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sunmi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const bio3 = "who loves learning new things."
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
    <Avatar name='Sunmi Oye' src='https://bit.ly/sunmi-oye' bg='teal.500' />
    <p>{greeting}</p>
    <Heading>
      <VStack>
        <p>{bio1}</p>
        <p>{bio2}</p>
        <p>{bio3}</p>
      </VStack>
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
