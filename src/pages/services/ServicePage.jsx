import CommonBanner from "../../components/Common-Sections/CommonBanner";
import ServiceSection from "../../components/Common-Sections/ServiceSection"
import WhatWeDo from "./whatWeDo";
function ServicePage() {
  const BannerData = {
    "BannerHeading": "Services",
  }
  return (
    <>
      <title>Services HorseRid Horse Club - Passion for Riding & Excellence in Training</title>
      <CommonBanner BannerData={BannerData} />
      <WhatWeDo />
      <ServiceSection noBg limit={6} slider={false} />

    </>
  );
}

export default ServicePage;