import { useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { FreeMode,Navigation,Thumbs } from "swiper/modules";
// This component handles the Thumbnail swiper section
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Divider } from "@chakra-ui/react";

const PropertyThumbnailSlider= ({photos} )=>{
    const[thumbsSwiper,setThumbsSwiper] =useState(null);
    return(
        <>
        {/* Thumbnail Swiper for bigger images */}
        <Swiper
        style={{
            "--swiper-navigation-color":"#fff",
            "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        navigation={true}
        thumbs={{
            swiper:thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper:null
        }}
        modules ={[FreeMode,Navigation,Thumbs]}
        className="mySwiper2"
        >
        {/* Pass images */}
        {photos.map((image)=>(
            <SwiperSlide key={image}>
                <img src ={image}/>
            </SwiperSlide>
        ))}
        
        </Swiper>
        <Divider marginY="1rem"/>
        {/* Swiper that contains smaller Thumbnail images */}
        <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={{FreeMode,Navigation,Thumbs}}
        className="mySwiper"
        >
             {/* Pass images */}
        {photos.map((image)=>(
            <SwiperSlide key={image}>
                <img src ={image}/>
            </SwiperSlide>
        ))}

        </Swiper>
   
        </>
    )
}
export default PropertyThumbnailSlider;