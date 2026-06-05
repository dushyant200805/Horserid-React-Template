import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ServiceData} from "../../data/ServiceData";
import { useParams } from "react-router-dom";  
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
function Suggestion ({noBg}) {
                // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);

 const { id } = useParams();
    const Service = ServiceData.find((e) => e.id === Number(id) );
    
  if (!Service) return <h2 className="text-center fs-2 my-3">Services Not Found</h2>;
    return (
        <> 
                <section className={`py-6 ${noBg ? "" : "alt-bg"} `}>
        <div className="container">
            <div className="row align-items-center g-3">
                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="decription-image">
                        <img src={Service.image2} alt="" className="w-100 object-fit-cover"
                            height="350"/>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                    <div className="p-3">
                        <p className="white-text text=text-capitalize fw-medium mb-3">
                           {Service.description1}</p>
                        <ul className="list-unstyled">
                            <li className="white-text my-2"><FontAwesomeIcon icon={faChessKnight} className="second-text fs-6 me-2" /> {Service.BuletPoint1}</li>
                            <li className="white-text my-2"><FontAwesomeIcon icon={faChessKnight} className="second-text fs-6 me-2" /> {Service.BuletPoint2}</li>
                            <li className="white-text my-2"><FontAwesomeIcon icon={faChessKnight} className="second-text fs-6 me-2"   /> {Service.BuletPoint3}</li>
                            <li className="white-text my-2"><FontAwesomeIcon icon={faChessKnight} className="second-text fs-6 me-2" /> {Service.BuletPoint4}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-duration="1000">
                    <div className="p-3">
                        <h2 className="second-text text-capitalize display-4 second-font fw-medium mb-3">{Service.heading2}</h2>
                        <p className="white-text text-capitalize fw-medium mb-4">{Service.description3}</p>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="decription-image">
                        <img src={Service.image3} alt="" className="w-100 object-fit-cover"
                            height="350" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default Suggestion;