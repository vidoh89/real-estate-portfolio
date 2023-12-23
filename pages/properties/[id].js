import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";
import PropertyStats from "@/features/Property/PropertyStats/PropertyStats";
import PropertyThumbnailSlider from "@/features/Property/components/PropertyThumbnailSlider/PropertyThumbnailSlider";
import PropertyYoutube from "@/features/Property/components/PropertyThumbnailSlider/PropertyYoutubeEmbed/PropertyYoutube";
import { usePropertyFormat } from "@/features/common/modules/Navigation/components/Hooks/usePropertyFormat";
import TextContentBox from "@/features/common/modules/Navigation/components/TextContentBox/TextContentBox";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

// This component displays property information for each individual property from prperty.json
const PropertySingle = ({ property }) => {
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
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furshied,
  } = usePropertyFormat(property);
  return (
    <DefaultLayout>
      <Box backgroundColor="green.200" paddingY="3rem">
        <Grid
          templateColumns="repeat(6,1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          <GridItem colSpan="6">
            <Text
              fontSize="3xl"
              fontWeight="medium"
              color="green.700"
              textAlign={{ base: "center", sm: "left" }}
            >
              {propertyType}
              {title}
            </Text>
            <Flex
              fontSize="xl"
              color="green.600"
              textAlign="center"
              alignItems="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap="0.5rem"
              marginY={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text>
                {address} -ID:{externalID}
              </Text>
              <Badge backgroundColor="green.100">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: "6", sm: "3" }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
            />
            {/* Displays property description of individual properties */}
            <TextContentBox title="Description">
              {/* Edit TextContentBox's children (Text() below) in the actual TextContentBox.js file */}
              <Text
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
                noOfLines="4"
              >
                {description}
              </Text>
            </TextContentBox>
            {/* TextContentBox for Amenities */}
            <TextContentBox title="Amenities">
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
              >
                {amenities.length ? amenities.map((item)=><Text>{item}</Text>)
                 :"Please contact us for more info"}
              </SimpleGrid>
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{base:6,sm:3}}>
            {/* Property Youtube component for videos */}
          <PropertyYoutube coverVideo={coverVideo}/>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertySingle;
// extract property information into property component property.
export async function getServerSideProps() {
  const property = require("@/features/data/property");

  return {
    props: { property },
  };
}
