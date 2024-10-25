import { Heading, HStack, Image, Text, VStack , Box, Button, Icon} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
 
  return(
    <VStack rounded="3xl" bgColor="#fff" align="start">
      <Image rounded="3xl" src={imageSrc} alt="portfolio image" />
      <Box padding="4" >
        <Heading size="md" color="black" mb={4}>{title}</Heading>
        <Text textStyle="xs" color="black" mb={4}>{description}</Text>  
        <Button colorPalette="teal" variant="outline" gap={2} border="none" padding={0} _hover={{bgColor:"transparent"}} >
       See More <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        
      </Box>
    </VStack>
  )
};

export default Card;
