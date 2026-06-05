import HeroBanner from "./HeroBanner";
import CounterSection from "./CounterSection";
import AboutSection from "../../components/Common-Sections/AboutSection";
import AboutCardSection from "../../components/Common-Sections/AboutCardSection";
import ParmotionCard from "../../components/Common-Sections/Parmotion";
import ServiceSection from "../../components/Common-Sections/servicesection"
import FaqSection from "../../components/Common-Sections/FaqSection";
import AwardSection from "../../components/Common-Sections/AwardSection";
import BlogSection from "../../components/Common-Sections/blogsection";
import TestimonialSection from "../../components/Common-Sections/TestimonialSection";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
function Home() {
  return (
    <>
      <HeroBanner />
      <CounterSection />
      <AboutSection />
      <AboutCardSection noBg />
      <ParmotionCard />
      <ServiceSection noBg limit={6} slider={true} />
      <FaqSection />
      <AwardSection noBg />
      <BlogSection limit={3} />
      <TestimonialSection />
    </>
  );
}

export default Home;