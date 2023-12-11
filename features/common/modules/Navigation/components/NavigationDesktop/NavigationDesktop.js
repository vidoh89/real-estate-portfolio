import { Box, Flex, Text,Button } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../navigationConsts";
const NavigationDesktop = () => {
  return (
    // use Box context from chakra-ui acts as a replacement of a div
    <Box
      color="green.400"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      {/* Container for logo and navigation */}
      <Box maxWidth="1280px" margin="0 auto">
        {/* Set logo and navigation side by side by using flexbox */}
        <Flex alignItems="center" justifyContent="space-between">
          {/*Create a new Box. Add heading text using Text context from chakra 
         import Link context and wrap logo-navigation box inside*/}
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              {/* Add Home logo use react-icons/hi2 */}
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                Siera Dority
              </Text>
            </Box>
          </Link>
          {navigationLinks.map((item)=>(
            <NavigationLink key={item.title} {...item}/>
          ))}
          <Button padding='1.5rem' backgroundColor="green.300" 
            color="white" fontSize='0.8rem' fontWeight="medium"
          >Create Listing</Button>
        </Flex>
      </Box>
    </Box>
  );
};
export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
