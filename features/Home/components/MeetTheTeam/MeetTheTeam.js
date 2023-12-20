import { Box, Flex, Text } from "@chakra-ui/react";
import { agents } from "./agentconst";
import AgentCard from "./components/AgentCard/AgentCard";
// Component holds information about real estate agents.
const MeetTheTeam= ()=>{
    return(
        <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{base:"3rem",sm:"6rem"}}
        >
            <Text
            fontSize={{base:"4xl",sm:"5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
            >
                Meet The Team

            </Text>
            <Text
            fontSize="2xl"
            fontWeight="light"
            marginTop="1rem"
            marginBottom="3rem"
            paddingX="2rem"
            textAlign="center"
            >
                The best in the industry, at your service 24/7.
            </Text>
            {/* Import data from agentConst.js, This will display agent picture and information */}
            <Flex 
            direction={{base:"column",sm:"row"}}
             justifyContent='space-between' 
            gap='1.5rem'>
                {agents.map((agent)=>(
                    <div key={agent.name}{...agent} >
                        <AgentCard key={agent.name} {...agent} backgroundSize="20px"/>
                    </div>
                    
                ))}
            </Flex>
        </Box>
    ) 


}
export default MeetTheTeam;