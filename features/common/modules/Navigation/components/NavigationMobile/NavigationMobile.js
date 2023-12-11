import { Box, Flex, Text,Menu, MenuList, MenuButton, IconButton, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";


const NavigationMobile = () =>{
    return (
           // use Box context from chakra-ui acts as a replacement of a div
    <Box
    color="green.400"
    padding="2rem"
    backgroundColor="white"
    display={{ base: "block", md: "none" }}
  >
   
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
        {/* Creacte button */}
        <Menu>
            <MenuButton as ={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon/>}
            variant="outline"
            color="green.300"
            
            />
            <MenuList>
            {navigationLinks.map((item)=>(
          <NavigationLink key={item.title} {...item}/>
        ))};
            </MenuList>
        </Menu>
      </Flex>
  </Box>
    );
};
export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
    return (
        // Place MenuItems inside Link>MenuItem context
        // Fixes aesthetics of menu items on smaller screens
      <Link href={link}>
        <MenuItem alignItems="center" gap="0.5">
          {icon}
          {title}
        </MenuItem>
      </Link>
    );
  };
  