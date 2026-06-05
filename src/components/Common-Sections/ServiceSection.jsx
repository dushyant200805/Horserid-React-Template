import { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { ServiceData } from "../../data/ServiceData";
import ServiceCard from "../Ui/ServiceCard";
function ServiceSection ({limit, slider = true,noBg}) {
     const displayedService = limit
    ? ServiceData.slice(0, limit)
    : ServiceData;

        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);

 const sliderRef = useRef(null);
useEffect(() => {
  // ❗ STOP if slider is false
  if (!slider || !sliderRef.current) return;

  const splide = new Splide(sliderRef.current, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    speed: 1000,
    arrows: false,
    pagination: false,
    drag: true,
    keyboard: true,
    breakpoints: {
      992: { perPage: 2 },
      576: { perPage: 1 },
    },
  });

  splide.mount();

  return () => splide.destroy();
}, [slider, displayedService]);
    return (
        <>
       <section className={`py-6 ${noBg ? "" : "alt-bg"} `}>
        <div className="container">
            <div className="head-content text-start mb-5" data-aos="fade-right" data-aos-duration="1000">
                <span className="head-text text-capitalize fw-semibold fs-5">our services</span>
                <h2 className="second-font head-text display-4 fw-medium text-capitalize">Courses & Training</h2>
                <p className="para-text fw-normal text-capitalize">Diam vulputate ut pharetra sit amet aliquam id. Nunc
                    consequat
                    interdum varius sit amet mattis vulputate enim nulla. Blandit cursus risus at ultrices mi tempus.
                </p>
            </div>
            {slider ? (
            <div className="row justify-content-lg-end">
                <div className="col-lg-11" data-aos="fade-up" data-aos-duration="1000">
                    <div id="service-slider" className="splide" ref={sliderRef}>
                        <div className="splide__track py-2 px-3">
                            <ul className="splide__list">
                                    {displayedService .map((Service) => (
                                    <li className="splide__slide  rounded-4 shadow-none"key={Service.id} >
                                            <ServiceCard Service={Service}/>                                       
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
               <div className="row">
                    {displayedService.map((Service) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={Service.id}>
                        <ServiceCard Service={Service} />
                    </div>
                    ))}
                </div>
                )}
        </div>
    </section>
        </>
    );
}
export default ServiceSection;