import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
function ContactFrom() {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);

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
            {/* <!-- contact section --> */}
            <section className="py-6">
                <div className="container">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                            <div className="d-flex flex align-items-center gap-4">
                                <div className="image-container">
                                    <img src="/contact-image-1.webp" data-logo="light" alt=""
                                        className="w-100 object-fit-contain" height="200" />
                                    <img src="/contact-image-2.webp" data-logo="dark" alt=""
                                        className="w-100 object-fit-contain" height="200" />
                                </div>
                                <div>
                                    <h2 className="second-font second-text text-capitalize display-5 fw-medium">We're Here To
                                        Provide 24X7
                                        Support</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                            <div className="border-start light-border px-4">
                                <p className="para-text text-capitalize fw-medium">Mauris imperdiet ex et efficitur convallis.
                                    Vestibulum tempus risus a enim rutrum ullamcorper. Donec accumsan imperdiet tincidunt. Cras
                                    sapien lectus, molestie a ultricies sed.</p>
                            </div>
                        </div>
                        <div className="row g-3 ">
                            <div className="col-lg-7">
                                <div className="contact-container p-5 card-alt-bg">
                                    <div className="contact-image-container mb-3" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src="/contact-image-3.webp" alt="" className="w-100 object-fit-cover"
                                            height="280" />
                                    </div>
                                    <form action="send-email.php" method="POST" id="contactform" data-aos="fade-up" data-aos-duration="1000" onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className="row gx-3 gy-3">
                                            <div className="col-12 mb-3">
                                                <label htmlFor="name" className="form-label head-text text-capitalize">Full
                                                    Name</label>
                                                <input type="text" aria-label="first name"
                                                    className="form-control py-3 input-bg input-text rounded-0 border prime-border  shadow-none"
                                                    name="name" id="name" placeholder="Enter Your full Name" {...register("fullname", { required: "Enter Your Full Name" })} />
                                                <div className="error">{errors.fullname?.message}</div>
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label htmlFor="Phone" className="form-label head-text text-capitalize">Phone</label>
                                                <input type="text" aria-label="name"
                                                    className="form-control py-3 input-bg input-text rounded-0 border prime-border  shadow-none"
                                                    name="phone" id="phone" placeholder="Enter Your Phone Number" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }}
                                                    {...register("phone", { required: "Enter Your Phone", pattern: { value: /^[6-9]\d{9}$/, message: "Please Enter A Vaild Phone Number" } })} />
                                                <div className="error">{errors.phone?.message}</div>
                                            </div>
                                             

                                            <div className="col-12 mb-3">
                                                <label htmlFor="email" className="form-label head-text text-capitalize">Email
                                                    address</label>
                                                <input type="email" aria-label="email"
                                                    className="form-control py-3 input-bg input-text rounded-0 border prime-border  shadow-none"
                                                    name="email" id="email" placeholder="Enter Your Email Address"  {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                                                <div className="error">{errors.email?.message}</div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="message"
                                                    className="form-label head-text text-capitalize">message</label>
                                                <textarea
                                                    className="form-control input-bg input-text rounded-0 border prime-border  shadow-none"
                                                    placeholder="Enter Your Message" name="message" id="message"
                                                    rows="8" {...register("message", { required: "Enter Your Message" })}></textarea>
                                                <div className="error">{errors.message?.message}</div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" name="contactfmain"
                                                    className="btn prime-btn py-2 px-3 rounded-0">
                                                    <span className="text text-capitalize">submit a query</span>
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-up" data-aos-duration="1000">
                                <div className="card-bg p-4">
                                    <span className="text-capitalize fw-medium white-text d-block mb-3">Contact Our Team For</span>
                                    <h3 className="second-font white-text fw-medium display-5 mb-3">Jockey Training</h3>
                                    <p className="white-text text-capitalize my-4">
                                        Id eu nisl nunc mi ipsum faucibus vitae. Amet consectetur sit amet adipiscing elit
                                        pellentesque habitant.
                                    </p>
                                    <div className="d-flex gap-4 mb-4">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope} className="fs-2 white-text" />
                                        </div>
                                        <div className="content">
                                            <h4 className="second-font fw-medium white-text text-capitalize mb-2">E-mail Us</h4>
                                            <a href="javascript;;" className="white-text text-capitalize">Demo@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 mb-4">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faLocationDot} className="fs-2 white-text" />
                                        </div>
                                        <div className="content">
                                            <h4 className="second-font fw-medium white-text text-capitalize mb-2">Visit Our Branch
                                                Office</h4>
                                            <p className="white-text text-capitalize">No: 58 A, East Madison Street, Baltimore, MD,
                                                USA 4508</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4 mb-4">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhone} className="fs-2 white-text" />
                                        </div>
                                        <div className="content">
                                            <h4 className="second-font fw-medium white-text text-capitalize mb-2">call us</h4>
                                            <a href="javascript;;" className="white-text fw-medium text-capitalize d-block mb-2">+12
                                                3456790</a>
                                            <a href="javascript;;" className="white-text fw-medium text-capitalize d-block">+000 00
                                                000</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- map --> */}
            <div className="add-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4438406346094!2d-0.06430397633102654!3d51.56009649352875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1751880412504!5m2!1sen!2sin"
                    className="w-100" style={{ minHeight: "450px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"> </iframe>
            </div>
        </>
    );
}
export default ContactFrom;
