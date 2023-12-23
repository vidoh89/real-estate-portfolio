import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/features/common/modules/Navigation/components/PropertyCard/PropertyCard";
import { useIsDesktop } from "@/features/common/modules/Navigation/components/Hooks/useIsDesktop";

const PropertySlider = ({featuredProperties}) =>{
    // import useIsDesktop hook to adjusted number of images displayed
    // with the slider based on the screen size

    const  {isDesktop} = useIsDesktop()
    return(
         
        // Add image slider ,using Swiper
      <Swiper
      slidesPerView={isDesktop ?3 :1}
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