function AboutCard({noBg}) {
    const aboutCardData = [
        {
            image: "/coustom-icon-1.webp",
            title: "Specialized Classrooms",
            description: "Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Consequat mauris nunc congue nisi.",
           
        },
        {
            image: "/coustom-icon-2.webp",
            title: "Activ-Track Gallop",
            description: "Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Consequat mauris nunc congue nisi.",
           
        },
        {
            image: "/coustom-icon-3.webp",
            title: "Ultramodern Training",
            description: "Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Consequat mauris nunc congue nisi.",
           
        },
        {
            image: "/coustom-icon-3.webp",
            title: "Brand New Courses",
            description: "Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Consequat mauris nunc congue nisi.",
           
        },
    ];
    return (
        <>
            {aboutCardData.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                    <div className={`coustom-card ${noBg ? "prime-bg" : "card-bg"} p-4`}>
                        <div className="d-flex align-items-center flex-wrap gap-2 mb-4">
                            <div className="image-container rounded-circle border p-2">
                                <img src={item.image} alt="" className="w-100 object-fit-contain" height="50" />
                            </div>
                            <div className="content">
                                <h2 className="fs-5 text-capitalize white-text fw-semibold second-font">
                                    {item.title}
                                </h2>
                            </div>
                        </div>
                        <p className="white-text text-capitalize">{item.description}</p>
                        <a href="/about-us" className="white-text py-2 px-3 text-capitalize fw-light">
                            read more <i className="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AboutCard;   