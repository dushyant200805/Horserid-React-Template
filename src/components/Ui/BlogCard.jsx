import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router";
function BlogCard ({Blog}) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return (
        <>
            <div className="col-lg-4 " data-aos="zoom-in" data-aos-duration="1000">
                    <div className="blog-card position-relative h-100">
                        <div className="image-container mb-3 ">
                            <Link to={`/blogdetails/${Blog.id}`}>
                                <img src={Blog.image1} alt="blog-image-1"
                                    className="w-100 object-fit-cover" height="300"/>
                            </Link>
                        </div>
                        <div className="blog-tag card-alt-bg d-inline p-2 position-absolute ">
                            <span className="head-text text-capitalize fw-semibold">{Blog.date}/ 1 Comment</span>
                        </div>
                        <div className="content">
                            <Link to={`/blogdetails/${Blog.id}`} className="white-text text-capitalize fw-light second-font mb-2 fs-4">{Blog.title}</Link>
                            <p className="white-text text-capitalize">{Blog.description1}</p>
                             <Link to={`/blogdetails/${Blog.id}`} className="btn prime-btn py-2 px-3 text-capitalize rounded-0">
                                 read more
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default BlogCard ;