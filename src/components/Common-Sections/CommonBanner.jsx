import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function CommonBanner({BannerData}) {
    useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, [])
    return (
        <>
         {/* <!-- about-banner --> */}
    <section className="banner-section">
        <div className="container">
            <div className="mx-auto text-center" data-aos="fade-right" data-aos-duration="1000">
                <h1 className="white-text text-capitalize display-3 fw-semibold second-font">{BannerData.BannerHeading}</h1>
                <h2 className="white-text fs-5 second-font text-uppercase"><a href="/" className="me-2">home</a>/ {BannerData.BannerHeading}
                </h2>
            </div>
        </div>
    </section>
        </>
    );
}

export default CommonBanner;