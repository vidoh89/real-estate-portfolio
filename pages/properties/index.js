import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import PropertyCard from "@/features/common/modules/Navigation/components/PropertyCard/PropertyCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Properties =({properties})=>{
    // Display full property inventory on the property page
    return (
        <DefaultLayout>
             <Box backgroundColor="#f7f8f9" padding="3rem">
               <Box maxWidth="1280px" margin="0 auto">
                <SimpleGrid
                columns={{base:"1",sm:"3"}}
                gap={{base:"0" ,sm:"2rem"}}
                >
                    {properties.map((property)=>(
                        <PropertyCard key={property.id} {...property}/>
                    ))}
                </SimpleGrid>
                </Box>  
             </Box>
        </DefaultLayout>
    )
}
export default Properties;

// Fetch data and render static html page
export async function getStaticProps(){
    const {hits} =require("@/features/data/properties");
    return {
        props: {properties:hits}
    };
}