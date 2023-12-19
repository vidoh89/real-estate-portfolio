import { Box, Image } from "@chakra-ui/react";
// This component is used to display agent's information
const AgentCard=({name,image,description,title}) =>{
    return(
      <Box
      backgroundColor="#f1f1f14a"
      padding="2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom={{base:"1rem",sm:"0"}}
      >
        <Image src={image}/>
      </Box>
    )
}
export default AgentCard;