import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
const year = new Date().getFullYear();
function Footer() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // form Validation 
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append("newsletter", true);
        formData.append("n_email", data.email);

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
            {/* <!-- footer --> */}
            <footer className="footer-bg">
                <div className="container">
                    <div className="row align-items-center border-bottom light-border py-5">
                        <div className="col-sm-6 mx-auto d-flex justify-content-center ">
                            <a href="index.html">
                                <img src="/logo-dark.png" className="object-fit-contain" width="120"
                                    alt="logo-light" />
                            </a>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className=" col-lg-4 mb-4">
                            <h2 className="text-capitalize second-font fs-5 mb-3 footer-text fw-semibold">join our newsletter</h2>
                            <form id="newsletter" action="send-email.php" method="POST" className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-3 p-1 input-bg border light-border">
                                    <input type="email" name="n_email" id="n_email"
                                        className="form-control input-text border-0 p-1 bg-transparent shadow-none "
                                        placeholder="E-mail" aria-label="subscribe to our newsletter" {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                                    <button className="btn prime-btn rounded-0" type="submit" name="newsletter">subscribe</button>
                                </div>
                                <div className="error ">{errors.email?.message}</div>
                            </form>
                            <div className="social-container">
                                <h3 className="white-text mb-2 fs-5 fw-medium second-font text-capitalize">follow us</h3>
                                <div className="d-flex gap-2 align-items-center">
                                    <a href="#" className="icon-bg" aria-label="Facebook">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a href="#" className="icon-bg" aria-label="instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#" className="icon-bg" aria-label="twitter">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 d-flex justify-content-lg-center footer-text">
                            <div className="Quick-link-container">
                                <h2 className="text-capitalize fs-4 mb-3 fw-semibold second-font">quick links</h2>
                                <ul className="f-link list-unstyled text-capitalize ps-2">
                                    <li className="mb-2 fs-7"><Link to="/">home</Link></li>
                                    <li className="mb-2 fs-7"><Link to="/about-us">about-us</Link></li>
                                    <li className="mb-2 fs-7"><Link to="/services">services</Link></li>
                                    <li className="mb-2 fs-7"><Link to="/blogs">blogs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2 footer-text">
                            <h2 className="text-capitalize fs-4 mb-3 fw-semibold second-font">safety & polices</h2>
                            <ul className="f-link list-unstyled text-capitalize ps-2">
                                <li className="mb-2 fs-7"><a href="#">safety</a></li>
                                <li className="mb-2 fs-7"><a href="#">tearms & condition</a></li>
                                <li className="mb-2 fs-7"><a href="#">privacy policy</a></li>
                                <li className="mb-2 fs-7"><a href="#">refund policy</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-3 footer-text">
                            <h2 className="text-capitalize fs-4 mb-3 fw-semibold second-font">customer care</h2>
                            <ul className="f-link list-unstyled text-capitalize ps-2">
                                <li className="mb-2 fs-7"><a href="#">my appointments</a></li>
                                <li className="mb-2 fs-7"><a href="#">FAQs</a></li>
                                <li className="mb-2 fs-7"><a href="#">support</a></li>
                                <li className="mb-2 fs-7"><a href="#">gift vouchers</a></li>
                                <li className="mb-2 fs-7"><a href="#">book a session</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="footer-copy-bg text-center border-top light-border footer-copy-text text-capitalize py-1">
                    &copy;{year} horserid all rights reserved.
                </div>
            </footer>
            {/* <!-- back to top --> */}
            <a className={`btn prime-btn rounded-0 border-0 shadow-sm ${show ? "show" : ""}`} id="backtotop" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChessKnight} className="fs-4" />
            </a>
        </>
    );
}
export default Footer;