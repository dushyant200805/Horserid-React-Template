import { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

function AwardSection ({noBg}) {

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
      perPage: 3,
      perMove: 1,          
      autoplay: true,
      interval: 4000,     
      speed: 1000,       
      arrows: false,
      pagination: false,
      gap: "5%",
      drag: true,        
      keyboard: true,   
       breakpoints: {
        567: {  perPage: 1},
        768: {  perPage: 2},
        992: { perPage: 3},  },
    });

    splide.mount();

    return () => splide.destroy(); 
  }, []);


    return (
        <>
       <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
            <div className="row g-3 align-items-center">
                <div className="col-xl-3" >
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h2 className="second-font text-capitalize display-4 head-text mb-3" >awards</h2>
                        <p className="para-text text-capitalize mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                            Similique enim expedita repellendus reiciendis minus illum cum suscipit laborum obcaecati
                            illo excepturi, eius consequuntur accusamus quam!</p>
                        <h3 className="head-text second-font text-capitalize">+6 International Awards</h3>
                    </div>
                </div>
                <div className="col-xl-9" >
                    <div id="awards-slider" className="splide" ref={sliderRef}>
                        <div className="splide__track py-2 px-3">
                            <ul className="splide__list">
                                <li className="splide__slide  rounded-4 ">
                                    <div className="award-card ">
                                        <div className="image-container">
                                            <img src="/award-image-1.webp" alt="award-image-1"
                                                className="w-100 object-fit-contain" height="200"/>
                                        </div>
                                        <div className="content ">
                                            <h3
                                                className="second-text display-4 text-capitalize fw-semibold second-font mt-3 mb-3">
                                                2020</h3>
                                            <p className="para-text text-capitalize">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Optio, quos!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide  rounded-4 ">
                                    <div className="award-card ">
                                        <div className="content pt-xl-4 pt-md-2 mt-lg-1">
                                            <p className="para-text text-capitalize">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Optio, quos!</p>
                                            <h3
                                                className="second-text display-4 text-capitalize fw-semibold second-font mt-3 mb-3">
                                                2021</h3>
                                        </div>
                                        <div className="image-container  ">
                                            <img src="/award-image-2.webp" alt="award-image-1"
                                                className="w-100 object-fit-contain" height="200"/>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide  rounded-4 ">
                                    <div className="award-card ">
                                        <div className="image-container ">
                                            <img src="/award-image-3.webp" alt="award-image-1"
                                                className="w-100 object-fit-contain" height="200"/>
                                        </div>
                                        <div className="content ">
                                            <h3
                                                className="second-text display-4 text-capitalize fw-semibold second-font mt-3 mb-3">
                                                2022</h3>
                                            <p className="para-text text-capitalize">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Optio, quos!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide  rounded-4 ">
                                    <div className="award-card ">
                                        <div className="content pt-xl-4 pt-md-2 mt-lg-1">
                                            <p className="para-text text-capitalize">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Optio, quos!</p>
                                            <h3
                                                className="second-text display-4 text-capitalize fw-semibold second-font mt-3 mb-3">
                                                2023</h3>
                                        </div>
                                        <div className="image-container  ">
                                            <img src="/award-image-4.webp" alt="award-image-1"
                                                className="w-100 object-fit-contain" height="200"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default AwardSection ;