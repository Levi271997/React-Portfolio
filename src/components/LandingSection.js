import React from "react";
import { Avatar, Heading, VStack, Text, Separator } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarimage from "../images/avatar.jpg";

const greeting = "Hello, I am Levi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  <Avatar name="Levi Martinez" src={avatarimage} size="2xl"/>
  <Text fontSize="2xl" fontWeight="medium" textTransform="uppercase" mb="10">{greeting}</Text>
  <Heading as="h1" size="4xl">{bio1}</Heading>
  <Heading as="h1" size="4xl">{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
