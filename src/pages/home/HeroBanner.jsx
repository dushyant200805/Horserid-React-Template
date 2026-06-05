import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function  HeroBanner(){

    return(
     <section className="hero-banner">
        <div className="container d-flex justify-content-center">
            <div className="banner-content  text-center" >
                <span className="white-text text-capitalize fw-medium fs-5 d-block mb-3">Be Ready for Your Next Ride</span>
                <h1 className="white-text second-font text-capitalize fw-semibold display-3">Discover The Joy Of Riding</h1>
                <p className="white-text text-capitalize">At Hoerseno, we turn every ride into an unforgettable journey.
                    Whether you're a beginner or an experienced rider, join us to explore.</p>
                <Link to="/about-us" className="btn prime-btn-2 py-2 px-3 fw-semibold text-capitalize rounded-0">read more
                   <FontAwesomeIcon icon={faArrowRight} className="white-text ms-1"/> </Link>
            </div>
        </div>
    </section>
    )
}
export default HeroBanner