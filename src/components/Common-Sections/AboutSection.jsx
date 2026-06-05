import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutSection({noBg}){
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, [])
    return(
        <>
        <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
            <div className="row g-3 align-items-center">
                <div className="col-xl-3 col-md-6" data-aos="fade-right" data-aos-duration="1200">
                    <div className="about-image-container ">
                        <img src="/about-image-1.webp" alt="about-image-1"/>
                    </div>
                </div>
                <div className="col-xl-5 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                    <div className="about-content  p-3">
                        <span className="white-text text-capitalize fw-medium d-block mb-3">about us</span>
                        <h2 className="white-text text-capitalize fw-semibold second-font mb-3 display-4">Top Training
                            Facility In The World</h2>
                        <div className="d-flex  flex-wrap mb-4">
                            <div className="card-alt-bg p-4 col-6 text-center">
                                <span className="fs-2 fw-medium head-text">10+</span>
                                <p className="text-capitalize second-font head-text">Years Experience</p>
                            </div>
                            <div className="p-4 col-6 text-center">
                                <span className="fs-2 fw-medium white-text">23k</span>
                                <p className="text-capitalize second-font white-text">Active Tracks</p>
                            </div>
                            <div className=" p-4 col-6 text-center">
                                <span className="fs-2 fw-medium white-text">43M</span>
                                <p className="text-capitalize second-font white-text">Satisfied Clients</p>
                            </div>
                            <div className="card-alt-bg p-4 col-6 text-center">
                                <span className="fs-2 fw-medium head-text">69k</span>
                                <p className="text-capitalize second-font head-text">Indoor Schools</p>
                            </div>
                        </div>
                        <p className="white-text text-capitalize ">Risus commodo viverra maecenas accumsan lacus vel
                            facilisis
                            volutpat. Pulvinar pellentesque habitant morbi tristique senectus. Molestie ac feugiat sed
                            lectus vestibulum mattis umcorper.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6" data-aos="fade-down" data-aos-duration="1200">
                    <div className="p-2">
                        <p className="white-text text-capitalize mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                            Perferendis velit totam,
                            ipsa excepturi est aperiam mollitia ut, ex in alias a dolorem incidunt facere reprehenderit.
                            Ratione sint alias sapiente ducimus.</p>
                        <div className="about-image-container-1">
                            <img src="/about-image-2.webp" alt="" className="w-100 object-fit-cover"
                                height="300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default AboutSection;    