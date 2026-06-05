function WhatWeDoCard() {
    const data = [
        {
            image: "/coustom-icon-1.webp",
            title: "The Racing Industry Course",
        },
        {
            image: "/coustom-icon-2.webp",
            title: "Horse Handling Training",
        },
        {
            image: "/coustom-icon-3.webp",
            title: "Cross-Country Riding Jump",
        },
        {
            image: "/coustom-icon-4.webp",
            title: "Hunters Stadium Jumping",
        },
    ];
    return (
        <>
        {data.map((item, index) => (
            <div className="col-md-6" key={index}>
                <div className="racing-card d-flex align-items-center">
                    <div className="racing-icon d-flex align-items-center justify-content-center">
                        <img src={item.image} alt="horse icon" />
                    </div>
                    <div className="racing-content ">
                        <h4 className="mb-0 para-text fs-5 second-font fw-medium">{item.title}</h4>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}

export default WhatWeDoCard;