import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { testimonials } from "./testimonialsConst";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
    // Component that displays testimonial information located in testimonialConst.js
const Testimonials = (name,image,testimonial,company) =>{
    return(
        <Box
        backgroundColor="green.50"
        >
            <Box
             maxWidth="1280px"
             margin="0 auto"
             paddingY={{base:"3rem",sm:"6rem"}}
            >
                  <Text
            fontSize={{base:'4xl', sm:'5xl'}}
            lineHeight="shorter"
            fontWeight="light"
            paddingX="1rem"
            textAlign="center"
            >
                Testimonials
                </Text>
                <Text
                fontSize="2xl"
                fontWeight="light"
                marginTop="1rem"
                marginBottom="3rem"
                paddingX="2rem"
                textAlign="center"
            
                
                >
                    Heres what our <span style={{color:"green",backgroundColor:"black  ",borderRadius:"50px",padding:".5rem"}}>valued</span> clients have to say
                    </Text>
                    <SimpleGrid
                    columns="3"
                    minChildWidth="300px"
                    gap={{base:'0.5rem', sm:'2.5rem'}}
                    >
                    {testimonials.map((testimonial)=>(
                        <TestimonialCard key={testimonial.name} {...testimonial}/>
                    ))}
                    </SimpleGrid>
            </Box>
        
        </Box>
    )
}
export default Testimonials;