export const usePropertyFormat=(property)=>{
    // Import property details from properties.json file
    //Address component
    const address = property.location.map((item)=>item.name).join(", ")
    // Cover Photo component
    const coverPhoto = property.coverPhoto.url;

    // Property Type/name
    const propertyType = `${property.category[0].name},${property.category[1].name}`

    // property price converting currency into USD
    const price = property.price.toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        maximumFractionDigits:0
    });
    // Property for title
    const title = property.title;
    // Property for rooms
    const rooms = property.rooms;
    // Property for baths
    const baths= property.baths;
    // purpose for property.
    const purpose = property.purpose;
    // Property size .(sqSize) using the function toFixed(2)to work with displayed digits.
    const sqSize= property.area.toFixed(2);
    // Property for externalID
    const externalID= property.externalID;
    // Holds data for photos located in  property.json/also check if the photos are available.
    const photos = property.photos?.map((photo)=>photo.url)||[];

    //Property description
    const description = property.description;
    //Holds data for coverVideos 
    const coverVideoUrl = property.coverVideo.url
    //using slice() take the end of the property url ,this will be used to embed video into webpage
    const coverVideo = coverVideoUrl.slice(coverVideoUrl.length -11);    
    //Panaroma data, also checks for data availability
    const panorama = property.panoramas?.length ? property.panoramas[0].url:[];
    
    //Holds data for ameneties. Usin the flatMap() reduces the arrays into one
    const amenities = property.amenities?.flatMap(({amenities})=>amenities).map((item)=>item.text);
    const furshied = property.furnishingStatus;
    return {
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
        furshied
    }
}