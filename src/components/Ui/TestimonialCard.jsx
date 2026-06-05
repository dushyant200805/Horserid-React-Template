function Testimonial () {
    const testimonialdata = [
        {   
            id:"1",
            Name:"falvio Tempah",
            image:"/test1.webp",
            Description:" Sed placerat pretium diam, sed tempus dolor rutrum eu. In et vestibulum magna. Lorem ipsum dolor sit amet,consectetur adipiscing elit Integer tempor est id fringilla tempus."
        },
         {
             id:"2",
            Name:"michel adelbert",
            image:"/test2.webp",
            Description:" Sed placerat pretium diam, sed tempus dolor rutrum eu. In et vestibulum magna. Lorem ipsum dolor sit amet,consectetur adipiscing elit Integer tempor est id fringilla tempus."
        },
    ];
    return (
        <>
        {testimonialdata.map((item,index)=>{
            return (
                <li className="splide__slide p-0 rounded-4" key={index}>
                    <div className="test-body">
                        <div className="text-center mb-4">
                            <div className="testimonial-img mx-auto mb-4">
                                <img src={item.image} alt="testimonial-img-1"/>
                            </div>
                        </div>
                        <blockquote className="fs-6 para-text mb-4 text-center">
                            {item.Description}
                        </blockquote>
                        <h3 className="head-text text-center second-text m-0 text-capitalize">{item.Name}</h3>
                    </div>
                </li>
            );
        })}
        </>
    );
}
export default Testimonial ;