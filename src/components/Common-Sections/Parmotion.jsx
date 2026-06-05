import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ParmotionCard ({noBg}) {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);
    return (
        <>
            {/* <!-- parmotion --> */}
    <div className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <p className="display-4 text-center white-text text-capitalize second-font mb-5" data-aos="fade-up"
                        data-aos-duration="1000">Our Commitment To
                        Delivering
                        Top Quality Training To All
                        Our Students We Have Installed Top Of The Range Facilities In All Our School Campus</p>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <div className="parmotion-image mb-3">
                            <img src="/parmotion-image-light.webp" alt="parmotion0-image"
                                className="w-100 object-fit-contain" height="100"/>
                        </div>
                        <p className="white-text text-center text-capitalize fs-5 second-font">Preston Sanchez- CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default ParmotionCard;