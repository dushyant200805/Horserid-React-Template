import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BlogData} from "../../data/BlogData"
import BlogCard from "../Ui/BlogCard";
    function BlogSection ({limit,noBg}) {
         const displayedBlog = limit
            ? BlogData.slice(0, limit)
            : BlogData;
        // aos Animation
        useEffect(() => {
        AOS.init({
        duration: 1200, // animation duration
        once: false,    // run only once
        });
        }, []);
    return (
        <>
     <section className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
            <div className="head-content mx-auto mb-5" data-aos="fade-up" data-aos-duration="1000">
                <span className="white-text text-capitalize fw-semibold">Latest News</span>
                <h2 className="white-text text-capitalize display-4 second-font fw-semibold">Latest Horse Club News</h2>
            </div>
            <div className="row g-3">
               {displayedBlog .map(Blog => (
                    <BlogCard key={Blog.id} Blog={Blog}/>
                   ))}
            </div>
        </div>
    </section>
        </>
    ) ;
}
export default BlogSection ;