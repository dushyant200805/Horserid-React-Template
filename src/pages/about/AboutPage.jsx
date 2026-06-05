import CommonBanner from "../../components/Common-Sections/CommonBanner";
import AboutSection from "../../components/Common-Sections/AboutSection";
import AboutCardSection from "../../components/Common-Sections/AboutCardSection";
import ParmotionCard from "../../components/Common-Sections/Parmotion";
import ServiceSection from "../../components/Common-Sections/servicesection"
import FaqSection from "../../components/Common-Sections/FaqSection";
import AwardSection from "../../components/Common-Sections/AwardSection";
import BlogSection from "../../components/Common-Sections/blogsection";
import TestimonialSection from "../../components/Common-Sections/TestimonialSection";

function AboutPage() {
  const BannerData = {
    "BannerHeading": "About Us",
  }
  return (
    <>

      <title>About HorseRid Horse Club - Passion for Riding & Excellence in Training</title>

      <CommonBanner BannerData={BannerData} />
      <AboutCardSection noBg />
      <AboutSection />
      <ServiceSection noBg limit={6} slider={true} />
      <ParmotionCard />
      <AwardSection noBg />
      <FaqSection />
      <TestimonialSection />
      <BlogSection limit={3} />
    </>
  );
}

export default AboutPage;