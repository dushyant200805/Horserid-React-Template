import { useParams } from "react-router-dom";   
import { BlogData } from "../../data/BlogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faChessKnight } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogsList() {
            // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);

   const { id } = useParams();
    const Blog = BlogData.find((e) => e.id === Number(id) );
    
  if (!Blog) return <h2 className="text-center fs-2 my-3">Blogs Not Found</h2>;
    console.log(Blog.description2);
  return (
    <>
           {/* <!-- blog details --> */}
    <section className="py-6">
        <div className="container">
            <div className="row g-3 justify-content-center">
                <div className="col-lg-11">
                    <div className="p-2">
                        <div className="mb-4" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={Blog.image1} alt="" className="w-100 object-fit-cover"
                                height="450"/>
                        </div>
                        <p className="para-text text-capitalize fw-medium" data-aos="fade-up" data-aos-duration="1000">
                            {Blog.description2}</p>
                        <div className="blog-image-conrtainer mb-4" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={Blog.image2} alt="" className="w-100 object-fit-cover"
                                height="350"/>
                        </div>
                        <div className="content" data-aos="fade-up" data-aos-duration="1000">
                            <h2 className="text-capitalize second-font fw-medium head-text mb-3">{Blog.title}</h2>
                            <p className="para-text text-capitalize fw-medium mb-3">
                              {Blog.description3}</p>
                            <p className="para-text text-capitalize fw-medium mb-3">{Blog.description4}</p>
                        </div>
                        <div className="blog-list mb-4">
                            <ul className="list-unstyled">
                                <li className="para-text my-2 fw-medium" data-aos="fade-up" data-aos-duration="1000">
                                    <FontAwesomeIcon icon={faChessKnight} className="second-text fs-4 me-2" />{Blog.BuletPoint1}</li>
                                <li className="para-text my-2 fw-medium" data-aos="fade-up" data-aos-duration="1000">  
                                    <FontAwesomeIcon icon={faChessKnight} className="second-text fs-4 me-2" />{Blog.BuletPoint2}</li>
                                <li className="para-text my-2 fw-medium" data-aos="fade-up" data-aos-duration="1000">
                                    <FontAwesomeIcon icon={faChessKnight} className="second-text fs-4 me-2" />{Blog.BuletPoint3}</li> 
                           
                                <li className="para-text my-2 fw-medium" data-aos="fade-up" data-aos-duration="1000">
                                     <FontAwesomeIcon icon={faChessKnight} className="second-text fs-4 me-2" />{Blog.BuletPoint4}</li> 
                            </ul>
                        </div>
                        <div className="comment-block p-4 prime-bg" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="mb-3 pb-3 border-bottom light-border">
                                <h3 className="second-font white-text fw-medium text-capitalizen mb-3">Comments ( 1 )</h3>
                                <h4 className="second-font white-text fw-medium text-capitalizen mb-3 fs-5">{Blog.ReviewerName}</h4>
                                <span className="white-text text-capitalize fw-medium">{Blog.CommentDate} at 10.05 am</span>
                                <p className="my-3 white-text text-capitalize fw-semibold">{Blog.Comment}</p>
                            </div>
                            <h5 className="white-text text-capitalize fw-medium fs-6">Comments are closed.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default BlogsList;