import { Box, Flex, SimpleGrid ,Text} from "@chakra-ui/react";
import {services,about,outOffices,workWithUs, ourOffices} from "./footerConst"
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";

const Footer = () =>{
    return(
        // Create main container with chakra-ui 
        <Box
        backgroundColor="green.300">
            {/* Box contains SimpleGrid layout  to help spread out the coloms*/}
            {/* Box also contains Flex which is inside of the SimpleGrid */}
            <Box
            maxWidth="1280px"
            margin="0 auto"
            paddingY="3rem"
            paddingX={{base:"2rem",sm:"0"}}
            >
                <SimpleGrid
                columns="4"
                color="whiteAlpha.700"
                gap="1.7rem"
                minChildWidth="150px" 
                >
                    {/* Displays Services provided ,data located inside footerConst.js */}
                    <Flex flexDirection="column">
                        <FooterHeader title="Services"/>
                        {services.map((item)=>(
                            <FooterLink key={item.name} {...item}/>
                        ))}
                    </Flex>
                    {/* About section */}
                    <Flex flexDirection="column">
                        <FooterHeader title="About"/>
                        {about.map((item)=>(
                            <FooterLink key={item.name} {...item}/>
                        ))}
                    </Flex>
                            {/* Our Office information */}
                    <Flex flexDirection="column">
                        <FooterHeader title="Our Offices"/>
                        {ourOffices.map((item)=>(
                            <FooterLink key={item.name} {...item}/>
                        ))}
                    </Flex>
                        {/* Work with us */}
                    <Flex flexDirection="column">
                        <FooterHeader title="Work With Us"/>
                        {workWithUs.map((item)=>(
                            <FooterLink key={item.name} {...item}/>
                        ))}
                    </Flex>


                </SimpleGrid>            
            </Box>
           {/* Bottom bar,contains terms and conditions etc */}
            <Box
            backgroundColor="green.600 " 
            display="flex" 
            padding="2rem"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color="white"
            >
                {/* Add logo to footer */}
            <Box>
                <HiHomeModern/>
                <Text fontSize="xl" fontWeight="black">
                    Siera Dority
                </Text>
            </Box>
            </Box>
        </Box>
    )
}
export default Footer;
// Add the links displayed on the footer section
const FooterLink = ({name,link})=>{
    return(
        <Text>
            <Link href={link}>{name}</Link>
        </Text>
    );
};
// Create Header section for the footer section
const FooterHeader = ({title})=>{
    return(
        <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1rem">
            {title}
        </Text>
    );
};