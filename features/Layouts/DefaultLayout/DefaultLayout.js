import Footer from "@/features/common/modules/Navigation/components/Footer/Footer"
import Navigation from "@/features/common/modules/Navigation/components/Navigation"
const DefaultLayout = ({children})=>{
    return (
    <>
    <Navigation/>
    {children}
    <Footer/>
    </>
    
    );
};
export default DefaultLayout;