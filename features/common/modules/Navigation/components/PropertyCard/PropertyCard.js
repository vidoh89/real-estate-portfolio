import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { usePropertyFormat } from "../Hooks/usePropertyFormat";
import {TbBed,TbBath,TbRuler} from 'react-icons/tb'
import Link from "next/link";

const PropertyCard = (property) =>{
// This components main purpose is to display data for the UI.
// All logic is exported into the custom hook usePropertyFormat

// Extract logic from custom hook and save it into an object
    const {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
    } =usePropertyFormat(property)
    return(
        // Outer container for photo display
       <Box marginBottom="4rem" backgroundColor="#fff">
        {/* By wrapping logic inside of a Link tag,it links each property to the externalID */}
        <Link href={`/properties/${externalID}`}>
            {/* Box to actually display photos */}
        <Box background= {`url("${coverPhoto}")`}
         height="250px"
         backgroundPosition="center center"
         backgroundSize="cover"
         position="relative"
         display="flex"
         flexDirection="column"
         justifyContent="space-between"
        
         >
            {/* Text overlaying photos{purpose} */}
            <Box>
                {/* wrap purpose in Badge component to display property purpose as a badge */}
                <Badge colorScheme="green" margin="1rem">{purpose}</Badge>
            </Box>
            {/* Box to hold price */}
            <Box 
            height="50%" 
            bgGradient='linear(to-t,#0a0b1cd9,#ffffff00 100%)'
            display="flex"
            alignItems="flex-end"

            
            >
                <Text fontSize="3xl" 
                fontWeight="medium" 
                color="whitesmoke">
                    {price}
                    </Text>
            </Box>
        </Box>
        {/* Container that displays the property type */}
        <Box padding="1.5rem">
            {/* Text for property type */}
            <Text
            fontSize="xl"
            fontWeight="medium"
            marginBottom="1rem"
            >{propertyType}
            </Text>
            {/* Text for property address */}
            <Text fontWeight="light" fontSize="sm" isTruncated>
                {address}
            </Text>
            {/* Text for title */}
            <Text isTruncated>{title}</Text>
            {/* Use the <HStack> component provided by chakra,to wrap room information  */}
            {/* Currently using HStack or horizontal stack which also uses Flex component */}

            <HStack spacing="1.3rem" marginTop="1rem">
                <Flex alignItems="center" gap="0.3rem">
                    {/* Add bed icon and room data */}
                    <TbBed/>
                    {rooms}
                    </Flex>
                    <Flex alignItems="center" gap="0.3rem">
                    {/* Add bath icon*/}
                    <TbBath/>
                    {baths}
                    </Flex>
                    <Flex alignItems="center" gap="0.3rem">
                    {/* Add Ruler icon for sqSize */}
                    <TbRuler/>
                    {sqSize}
                    {/* Displays m2 over sqSize */}
                    <sup>m2</sup>
                    </Flex>
            </HStack>
        </Box>
        </Link>
       
       </Box>
       
    )
}
export default PropertyCard;