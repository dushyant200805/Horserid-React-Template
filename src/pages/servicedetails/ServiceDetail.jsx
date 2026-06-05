import { ServiceData } from "../../data/ServiceData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
function ServiceDetails() {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);



    const { id } = useParams();
    const Service = ServiceData.find((e) => e.id === Number(id));

    if (!Service) return <h2 className="text-center fs-2 my-3">Services Not Found</h2>;


     // form Validation 
        const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    
        const onSubmit = async (data) => {
            const formData = new FormData();
    
            formData.append("contactfmain", true);
            formData.append("fname", data.firstname);
            formData.append("lname", data.lastname);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message);
    
            try {
                const response = await fetch("http://localhost:8080/send_email.php", {
                    method: "POST",
                    body: formData,
                });
    
                const result = await response.text();
                console.log(result);
    
                reset();
            } catch (error) {
                console.error("Error:", error);
            }
        };
    

    return (
        <>
            {/* <!-- service detail --> */}
            <section className="py-6">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-8">
                            <div className="service-details-image mb-4" data-aos="zoom-in" data-aos-duration="1000">
                                <img src={Service.image1} alt="" className="w-100 object-fit-cover"
                                    height="450" />
                            </div>
                            <div className="content" data-aos="fade-up" data-aos-duration="1000">
                                <h2 className="text-capitalize fw-medium display-4 mb-3 second-font second-text">{Service.heading1}</h2>
                                <p className="para-text text-capitalize fw-medium">Phasellus fermentum id nisl pellentesque tempus.
                                    {Service.description1}</p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="card-bg p-3">
                                <h3 className=" white-text my-3 second-font text-capitalize fw-medium mb-4">Get In Touch</h3>
                                <form action="send-email.php" method="post" className="getintoch mb-3" onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="col mb-4">
                                        <input type="text" name="name" id="name"
                                            className="form-control border-0 border-bottom light-border  rounded-0 py-2 px-0 bg-transparent shadow-none "
                                            placeholder="Name" aria-label="full name" {...register("fullname", { required: "Enter Your Full Name" })} />
                                            <div className="error">{errors.fullname?.message}</div>
                                    </div>
                                    <div className="col mb-4">
                                        <input type="email" name="email" id="email"
                                            className="form-control border-0 border-bottom light-border  rounded-0 py-2 px-0 bg-transparent shadow-none "
                                            placeholder="Email" aria-label="email"  {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })}/>
                                            <div className="error">{errors.email?.message}</div>
                                    </div>
                                    <div className="col mb-4">
                                        <textarea name="message" rows="2" aria-label="message" id="message"
                                            className="form-control  border-0 border-bottom light-border px-0 rounded-0 shadow-none bg-transparent"
                                            placeholder="Message" {...register("message", { required: "Enter Your Message" })} ></textarea>
                                            <div className="error">{errors.message?.message}</div>
                                    </div>
                                    <div className="col mb-4">
                                        <button type="submit" name="contactfmain"
                                            className="btn prime-btn text-capitalize py-2 px-3 second-font rounded-0">get in touch
                                        </button>
                                    </div>
                                </form>
                                <h3 className=" white-text second-font text-capitalize fw-medium mb-4">Contact Info</h3>
                                <p className="white-text text-capitalize fw-medium my-4">{Service.Address}</p>
                                <div className="d-flex flex-wrap align-items-center my-5  gap-3">
                                    <div className="pe-4 border-sm-end light-border">
                                        <a href="#" className="white-text fw-normal">{Service.contact}</a>
                                    </div>
                                    <div className="ps-sm-4">
                                        <a href="#" className="white-text fw-normal">{Service.email}</a>
                                    </div>
                                </div>
                                <h3 className=" white-text second-font text-capitalize fw-medium mb-4">Social Share :</h3>
                                <div className="">
                                    <a href="#" className="text-uppercase white-text mx-2">fb</a>
                                    <a href="#" className="text-capitalize white-text mx-2">be</a>
                                    <a href="#" className="text-capitalize white-text mx-2">tw</a>
                                    <a href="#" className="text-capitalize white-text mx-2">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServiceDetails;