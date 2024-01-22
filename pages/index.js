import FeaturedProperties from "@/features/Home/components/HeroBanner/FeaturedProperties/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam/MeetTheTeam";
import Partners from "@/features/Home/components/Partners/Partners";
import Testimonials from "@/features/Home/components/Testimonials/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

export default function Home({featuredProperties}){

  
  return(
    // DefaultLayout() contains the data for the Navigation bar and Footer
    <DefaultLayout>
      <HeroBanner/>
     <FeaturedProperties featuredProperties={featuredProperties}/>
      <MeetTheTeam />
      <Partners/>
      <Testimonials/>
      </DefaultLayout>
  );
};
// The getStaticProps() Fetches data at build time and then creates a static page
// Function provided by nextjs
// Pass data through static props and then up to the index page.
 export async function getStaticProps(){
  // hits holds the static properties data.
  const {hits }= require("@/features/data/properties")
  const {hits2}= require("@/features/propertydata/property2")
  
  // return data located on properties.json
  return {
    props:{featuredProperties: hits.slice(0,5)}
   
  };

}