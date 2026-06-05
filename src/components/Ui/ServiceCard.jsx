import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ServiceCard ( { Service} ) {
    return (
        <>
            
                <div className="service-slider-card test-body p-2 p-sm-4"  key={Service.id}>
                    <div className="service-image-container mb-3">
                        <img src={Service.image1} alt="service-image-1"
                            className="w-100 object-fit-cover" height="300"/>
                    </div>
                    <div className="content">
                        <h3 className="head-text text-capitalize fw-medium second-font">{Service.title}
                        </h3>
                        <p className="para-text text-capitalize">
                           {Service.description1}</p>

                        <p className="para-text text-capitalize">{Service.description}</p>
                        <Link to={`/servicedetails/${Service.id}`} className="gap-3 d-flex read-more">
                            <span className="d-block read-text para-text">Read More</span>
                            <span className="d-block arrow"> <FontAwesomeIcon icon={faArrowRight} className="para-text"/> </span>
                        </Link>
                    </div>
                </div>
            
        </>
    );
}   
export default ServiceCard;