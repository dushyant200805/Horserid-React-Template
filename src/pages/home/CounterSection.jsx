import { useEffect } from "react";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faChalkboard, faRankingStar } from "@fortawesome/free-solid-svg-icons";
function Counter() {
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, [])

     useEffect(() => {
  const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".counter-section");
        let hasRun = false; 
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    hasRun = true; // Run only once
                    counters.forEach(counter => {
                        let target = +counter.getAttribute("data-target");
                        let speed = target / 180; // Adjust speed
                        let count = 0;

                        let updateCounter = () => {
                            count += speed;
                            if (count < target) {
                                counter.innerText = Math.floor(count) + '+';
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target + '+'; // Ensure final value matches
                            }
                        };

                        updateCounter();
                    });
                }
            });
    }, { threshold: 1.0 }); // Trigger when 30% of section is visible
     observer.observe(counterSection);
      }, []);
    return (
        <> 
            {/* <!-- Counter --> */} 
          <div className="py-6 counter-section">
        <div className="container">
            <div className="row g-3">
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in" data-aos-duration="1000">
                    <div className="d-flex align-items-center justify-content-center gap-4 border light-border p-3">
                        <div className="icon-box border light-border">
                            <FontAwesomeIcon icon={faNewspaper} className="white-text fs-1"/>
                        </div>
                        <div>
                            <div className="display-4 fw-semibold second-font head-text counter" data-target="230">230+
                            </div>
                            <div className="para-text fw-semibold text-capitalize">Total Enrolled</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in" data-aos-duration="1000">
                    <div className="d-flex align-items-center justify-content-center gap-4 border light-border p-3">
                        <div className="icon-box border light-border">
                           
                             <FontAwesomeIcon icon={faRankingStar} className="white-text fs-1"/>
                        </div>
                        <div>
                            <div className="display-4 fw-semibold second-font head-text counter" data-target="98">98+
                            </div>
                            <div className="para-text fw-semibold text-capitalize">happy learners</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 " data-aos="zoom-in" data-aos-duration="1000">
                    <div className="d-flex align-items-center justify-content-center gap-4 border light-border p-3">
                        <div className="icon-box border light-border">
                             <FontAwesomeIcon icon={faChalkboard} className="white-text fs-1"/>
                        </div>
                        <div>
                            <div className="display-4 fw-semibold second-font head-text counter" data-target="99">99</div>
                            <div className="para-text fw-semibold text-capitalize">Total classNamees</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Counter;