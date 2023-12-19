import { Box,Text } from "@chakra-ui/react";
import PropertySlider from "./components/PropertySlider/PropertySlider";

const FeaturedProperties = ({featuredProperties})=>{

    return(
       <Box backgroundColor="green.50">
        <Box maxWidth="1280px" margin='0 auto' paddingY={{base: '3rem',sm:'6rem'}}>

            <Text 
            fontSize={{base:"4xl",sm:"5xl"}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="2rem"
            textAlign="center"
            
            >Disover Our Featured Properties</Text>
            <Text
            fontSize="2xl"
            fontWeight="light"
            marginTop="1rem"
            paddingX="2rem"
            textAlign="center"
            >
                A selection of our top properties

            </Text>
            <PropertySlider featuredProperties={featuredProperties}/>
        </Box>

       </Box>
    );
}
export default FeaturedProperties;