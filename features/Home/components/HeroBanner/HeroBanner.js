import { Box, Fade, Text} from "@chakra-ui/react";
import HeroForm from "./HeroForm/HeroForm";
const HeroBanner = () =>{
    return(
        // Add background image for HeroBanner
        
            
        <Fade in>
                    <Box
        position="relative"
        minHeight={{base:"110vh",sm:"60vh"}}
        backgroundImage={`url('./hero/living-room.jpg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        back
        >
            {/* Add overlay with self closing Box */}
            <Box 
            position="absolute"
            width="100%"
            height="100%"
            opacity="0.85"
            backgroundColor="green.800"
            />
        {/* Container for text and form */}
        <Box 
        display="flex" 
        flexDirection={{base:"column",sm:"row"}}
        alignItems="center"
        justifyContent={{base:"flex-start",sm:"space-between"}}
        maxWidth="1280px"
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="2rem"

         
        >
           {/* Add 2 Boxes to contain left and right data */}
           {/* Left side box */}
           <Box width={{base:"100%",sm:"50%"}}>
            <Text fontSize={{base:"4xl",sm:"5xl"}}
            lineHeight="6rem"
            marginBottom="1.5rem"
            >
                View  our newly available <strong>Properties  </strong> today<span style={{color:'#86E889'}}>!!!</span>
             </Text>
             
           </Box>

        {/* Form section */}
           <Box width={{base:"100%", sm:"auto"}} marginTop={{base:'2rem',sm:'0'}}><HeroForm/></Box>
        </Box>
        </Box>

        </Fade>
       
        
    );
};

export default HeroBanner;