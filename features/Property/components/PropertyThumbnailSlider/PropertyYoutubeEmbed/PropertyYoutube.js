import { Box } from "@chakra-ui/react";

// This component controls the Youtube embedded video

const PropertyYoutube= ({coverVideo}) =>{
    // Create a ratio variable to hold a specific screen size and position for youtube video
    // This will help with the aesthetics as the page loads
    const ratio = (315/560) *100;
    return(
        // Create a Box to hold the iframe/video
        <Box 
        paddingTop={`${ratio}%`}
        position="relative"
        height="0"
        overflow="hidden"
        frameBorder="0"
        >
            {/*  The params for the iframe is set by youtube embed guidelines*/}
            <iframe
            style={{position:'absolute',top:0,bottom:0}}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${coverVideo}`}
            allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            />
        </Box>
    )
}

export default PropertyYoutube;