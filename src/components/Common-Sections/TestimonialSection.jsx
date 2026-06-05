import { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import TestimonialCard from "../Ui/TestimonialCard";
function Testimonial () {

      // aos Animation
        useEffect(() => {
        AOS.init({
        duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);


     const sliderRef = useRef(null);
  useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: "loop",
      perPage: 1,
      perMove: 1,          
      autoplay: false,
      interval: 4000,     
      speed: 800,       
      arrows: false,
      pagination: false,
      drag: true,       
      keyboard: true,     
    });

    splide.mount();

    return () => splide.destroy(); 
  }, []);
    return (
        <>
            <section className="py-6">
        <div className="container">
            <div className="head-content mx-auto mb-5" data-aos="fade-up" data-aos-duration="1000">
                <span className="head-text text-capitalize fw-semibold">Testimonials</span>
                <h2 className="head-text text-capitalize display-4 second-font fw-semibold">Hear Out More</h2>
            </div>
            <div id="testimonial-slider" className="col-sm-8 mx-auto splide p-4" data-aos="fade-up" ref={sliderRef} data-aos-duration="1000">
                <div className="splide__track ">
                    <ul className="splide__list">
                        <TestimonialCard/>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default Testimonial;