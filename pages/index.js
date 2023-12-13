import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

export default function Home(){
  return(
    // DefaultLayout() contains the data for the Navigation bar and Footer
    <DefaultLayout><HeroBanner/></DefaultLayout>
  )
}