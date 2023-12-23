import { useState,useEffect } from "react"
// This component adjusts the images displayed in the slider 
// based on the screen size
// This hook is used in conjunction with the PropertySlider component
export const useIsDesktop = () =>{
    const [isDesktop,setIsDesktop] = useState(null);
    useEffect(()=>{
        // Logic to determine what screen size is being used
        if(window.innerWidth >1080){
            setIsDesktop(true);
        }else {
            setIsDesktop(false);
        }
        const updateMedia=(()=>{
            if(window.innerWidth >1080){
                setIsDesktop(true);
            }else {
                setIsDesktop(false);
            }
    

        })
        window.addEventListener("resize",updateMedia);
    },[]);
    return {isDesktop};
}