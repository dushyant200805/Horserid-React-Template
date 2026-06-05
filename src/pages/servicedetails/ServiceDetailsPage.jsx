import CommonBanner from "../../components/Common-Sections/CommonBanner"
import ServiceDetail from "./ServiceDetail";
import Suggestion from "./Suggestion";
function ServiceDetailsPage () {
     const BannerData ={
    "BannerHeading" :"Service Details",
  }
     return (
        <>
          <title>Service Details HorseRid Horse Club - Passion for Riding & Excellence in Training</title>
            <CommonBanner  BannerData={BannerData}/>
            <ServiceDetail/>
            <Suggestion/>
        </>
     );
}
export default ServiceDetailsPage ;