import { Box, Image, Text } from "@chakra-ui/react";
// This component is used to display agent's information
const AgentCard=({name,image,description,title}) =>{
    return(
      // Main Box container to hold agent information/manipulate agent data here
      <Box
      backgroundColor="#f1f1f14a"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginBottom={{base:"1rem",sm:"0"}}
      textAlign="center"
      >
      {/* Agent images found in agentconst.js */}
        <Image src={image}
         width="10rem"
         height="10rem"
         objectFit="cover"
         borderRadius="full"
         shadow="lg"
          />
          {/*Agent name etc */}
        <Text color="green.300" 
              fontSize="xl"
              fontWeight="bold"
        >
          {name}
        </Text>
        <Text
         fontSize="lg"
         color="green.600"
         noOfLines="1"
        >
          {title}
          </Text>
          <Text
          fontSize="md"
          fontWeight="light"
          noOfLines="4"
          marginTop="1rem"
          color="gray.600"
          >
            {description}
            </Text>

      </Box>
    )
}
export default AgentCard;