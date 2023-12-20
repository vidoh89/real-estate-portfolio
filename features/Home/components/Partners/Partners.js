import { Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./Partnersconst";
// Const that hold and manipulate partner information
const Partners=()=>{
    return(
        // Use simpleGrid to style partners information correctly.
        <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px">
        {partners.map((partner)=>{
            return(
                <Image
                key={partner}
                src={partner}
                alignSelf="center"
                padding={{base:"2rem",sm:"3rem"}}
                filter="grayScale(1)"
                opacity="0.4"
                />
            )
        })}
        </SimpleGrid>
    )
}
export default Partners;