import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function FaqSection ({noBg}) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return(
        <>
                {/* <!-- faq section --> */}
    <section className={`py-6 ${noBg ? "" : "alt-bg"} alt-bg`}>
        <div className="container">
            <div className="head-content text-start mb-5" data-aos="fade-right" data-aos-duration="1000">
                <span className="white-text text-capitalize fw-semibold ">Below Questions Might Help You!</span>
                <h2 className="white-text text-capitalize fw-medium second-font display-4">Frequently asked questions</h2>
            </div>
            <div className="row justify-content-xl-between align-items-center g-4" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="col-xl-6">
                    <div className="faq-container">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true">

                                        What techniques do you employ for training?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>

                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse "
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Aenean dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet
                                        iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur
                                        orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
                                        volutpat. Aenean volutpat neque blandit efficitur pellentesque. Proin non dolor
                                        justo. Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem,
                                        sed vulputate massa turpis quis justo.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo">

                                        Do you supply safety equipment?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Phasellus eu felis euismod, suscipit sapien eu, consectetur orci. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Aenean
                                        volutpat neque blandit efficitur pellentesque. Proin non dolor justo. Nulla
                                        dictum, quam non pellentesque fringilla, tellus nulla tempor lorem, sed
                                        vulputate massa turpis quis justo. Aenean dapibus massa sed urna dictum, in
                                        ornare magna vestibulum. In sit amet iaculis ligula.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree">

                                        Are classNamees held in a group or privately?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
                                        volutpat. Aenean volutpat neque blandit efficitur pellentesque. Proin non dolor
                                        justo. Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem,
                                        sed vulputate massa turpis quis justo. Aenean dapibus massa sed urna dictum, in
                                        ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod,
                                        suscipit sapien eu, consectetur orci
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapsefour">

                                        Do you have your own arena that is indoors?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>

                                <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
                                        volutpat. Aenean volutpat neque blandit efficitur pellentesque. Proin non dolor
                                        justo. Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem,
                                        sed vulputate massa turpis quis justo. Aenean dapibus massa sed urna dictum, in
                                        ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod,
                                        suscipit sapien eu, consectetur orci.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapsefive">

                                        What is the price of riding instruction?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>

                                <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem, sed
                                        vulputate massa turpis quis justo. Aenean dapibus massa sed urna dictum, in
                                        ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod,
                                        suscipit sapien eu, consectetur orci. Interdum et malesuada fames ac ante ipsum
                                        primis in faucibus. Aliquam erat volutpat. Aenean volutpat neque blandit
                                        efficitur pellentesque. Proin non dolor justo.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-5 second-font text-capitalize  bg-transparent  white-text"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseSix">

                                        Before I make my course reservation, may I tour your facility?
                                        <i className="fa-solid fa-angle-down faq-icon"></i>
                                    </button>
                                </h3>

                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body  white-text">
                                        Qonean dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet
                                        iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur
                                        orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat
                                        volutpat. Aenean volutpat neque blandit efficitur pellentesque. Proin non dolor
                                        justo. Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem,
                                        sed vulputate massa turpis quis justo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 d-flex justify-content-center">
                    <div className="position-relative d-inline-block">
                        <div className="faq-image-container">
                            <img src="/faq-image-1.webp" alt="faq-image-1" className="w-100 object-fit-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default FaqSection ;