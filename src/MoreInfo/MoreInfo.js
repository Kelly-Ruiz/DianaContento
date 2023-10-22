import Footer from "../Home/components/Footer";
import Header from "../Home/components/Header";
import MyBeliefs from "../Home/components/MyBeliefs";
import OurPlans from "../Home/components/OurPlans";
import AwakenYou from "./components/AwakenYou";
import VideoHeader from "./components/VideoHeader/VideoHeader";
import WhoIsDiana from "./components/WhoIsDiana";


function MoreInfo() {
  return (
    <>
    <VideoHeader/>
    <WhoIsDiana/>
    <AwakenYou/>
    <Footer/>
    </>
  );
}

export {MoreInfo};
