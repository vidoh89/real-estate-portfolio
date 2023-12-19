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
    }
}