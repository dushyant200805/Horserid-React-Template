import WhatWeDoCard from "../../components/Ui/whatwedoCard";
function WhatWeDo({noBg}) {
    return (
        <>
                {/* <!-- what we do --> */}
    <section className={`py-6 ${noBg ? "" : "alt-bg"} `}>
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
                    <div>
                        <span className="white-text text-capitalize fw-semibold d-block mb-3">what we do </span>
                        <h2 className="white-text text-capitalize mb-4 display-5 second-font fw-lighter">Provide
                            World-className
                            Horse Racing Instruction</h2>
                        <p className="white-text text-capitalize fw-medium mb-4">Suspendisse faucibus interdum posuere lorem
                            ipsum. Mauris
                            nunc congue nisi vitae. Eu scelerisque felis imperdiet proin fermentum leo vel orci
                            imperdiet dui porta</p>
                        <div className="ceo-card d-flex align-items-center gap-3 flex-wrap py-2">
                            <div className="image-container">
                                <img src="/public/ceo-image.webp" alt=""/>
                            </div>
                            <div className="content ">
                                <h3 className="fs-4 second-font fw-medium white-text text-capitalize">michelle Carol</h3>
                                <span className="white-text text-uppercase fw-medium">ceo trainer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="row g-3">
                       <WhatWeDoCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default WhatWeDo;