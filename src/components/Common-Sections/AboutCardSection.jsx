import AboutCard from "../Ui/AboutCard";

function AboutCardSection({noBg}) {
    return (
       <>
        <div className={`py-6 ${noBg ? "" : "alt-bg"}`}>
        <div className="container">
            <div className="row g-3">
                <AboutCard noBg={noBg}/>
            </div>
        </div>
    </div>
       </>
    );
}

export default AboutCardSection;