import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/features/common/modules/Navigation/components/PropertyCard/PropertyCard";

const PropertySlider = (featuredProperties) =>{
    console.log(featuredProperties);
 
    return(
        // Add image slider ,using Swiper
        <Swiper 
        slidesPerView={3} 
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{delay:2000,disableOnInteraction:true}}
        pagination={{dynamicBullets:true}}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        
        >
    
         {featuredProperties.map((property)=>(
            <SwiperSlide key={property.id}>
                <PropertyCard {...property}/>
            </SwiperSlide>
         ))}
        </Swiper>
    )
}

export default PropertySlider;