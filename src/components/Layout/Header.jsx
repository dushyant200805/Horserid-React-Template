import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ================= Project CSS =================
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { faBarsStaggered, faEnvelope, faLocationDot, faMoon, faPhone, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faPinterestP, faXTwitter } from "@fortawesome/free-brands-svg-icons";
function Header() {
    // offcanvas
    const handleClose = () => {
        document.querySelector(".close")?.click();
    };
    // header menu active
    const { pathname } = useLocation();
    // theme change
    // Get saved theme from localStorage
    const getSavedTheme = () => {
    return localStorage.getItem("theme") || "light";
    };  
     const [theme, setTheme] = useState(getSavedTheme);

     // Apply theme + save it
        useEffect(() => {
            document.documentElement.setAttribute(
            "data-horserid-theme",
            theme
            );

            localStorage.setItem("theme", theme);
        }, [theme]);

        // Toggle theme
        const toggleTheme = () => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        };
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <button id="btnSwitch" className="btn prime-btn theme-btn border-0 rounded-0 px-3 py-2 position-fixed top-50 end-0" aria-label="theme-switch button" onClick={toggleTheme}>
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faSun} className="fa-solid fs-5  fa-moon white-text" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="fa-solid fs-5  fa-moon white-text" />
                )}
            </button>
            <header className="border-bottom light-border head-bg fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-xxl">
                        {/* <!-- Logo --> */}
                        <Link className="navbar-brand py-2" to="/">
                            <img src="/logo-light.png" data-logo="light" className="object-fit-contain"
                                alt="logo-light" />
                            <img src="/logo-dark.png" data-logo="dark" className="object-fit-contain" alt="logo-light" />
                        </Link>

                        {/* <!-- Offcanvas Menu --> */}
                        <div className="offcanvas h-100 offcanvas-end" tabIndex="-1" id="offcanvasNavbar2">
                            <div className="offcanvas-header justify-content-between head-bg">
                                <img src="/logo-light.png" data-logo="light" className="object-fit-contain" width="120"
                                    alt="logo-light" />
                                <img src="/logo-dark.png" data-logo="dark" className="object-fit-contain" width="120"
                                    alt="logo-light" />
                                <button type="button" className="btn prime-btn lh-1 rounded-0 close" data-bs-dismiss="offcanvas"
                                    aria-label="Close">
                                    <FontAwesomeIcon icon={faXmark} className="fa-solid fs-5  fa-moon white-text" />
                                </button>
                            </div>
                            <div className="offcanvas-body  d-flex flex-column gap-lg-1 gap-4 ">
                                <ul className="list-unstyled gap-4 gap-xl-3 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center mb-4 order-2 order-lg-1">
                                    <li className="border-end light-border header-contact pe-3">
                                        <p className="fw-semibold m-0 nav-text mb-0 me-1 me-xl-3 text-capitalize d-inline">Mail us:
                                        </p>
                                        <a href="#" className="para-text text-capitalize fw-medium">
                                            <FontAwesomeIcon icon={faEnvelope} /> info@example.com</a>
                                    </li>
                                    <li className="border-end light-border header-contact pe-3">
                                        <p className="fw-semibold m-0 nav-text me-1 me-xl-3 text-capitalize d-inline"> <FontAwesomeIcon icon={faLocationDot} /> </p>
                                        <p className="fw-semibold m-0 nav-text m-0 text-capitalize d-inline">350 5th Ave, New York,
                                            NY 10118, USA</p>
                                    </li>
                                    <li>
                                        <div className="d-inline-flex align-items-center gap-1 gap-xl-2">
                                            <a href="#" className="icon-bg"> <FontAwesomeIcon icon={faFacebookF} /> </a>
                                            <a href="#" className="icon-bg"><FontAwesomeIcon icon={faXTwitter} /></a>
                                            <a href="#" className="icon-bg"> <FontAwesomeIcon icon={faPinterestP} /></a>
                                            <a href="#" className="icon-bg"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                    </li>
                                </ul>
                                <div className=" d-flex flex-column flex-lg-row justify-content-end align-items-lg-center order-1 order-lg-2">
                                    <ul className="navbar-nav justify-content-end gap-md-5 me-lg-5 mb-5 mb-lg-0" id="nav_ul">
                                        <li className={`nav-item ${pathname === "/" ? "active" : ""}`} onClick={handleClose} >
                                            <Link to="/" className="nav-link p-0 text-uppercase fw-semibold" aria-current="page">Home</Link>
                                        </li>
                                        <li className={`nav-item ${pathname === "/about-us" ? "active" : ""}`} onClick={handleClose}>
                                            <Link to="/about-us" className="nav-link p-0 text-uppercase fw-semibold">About-US</Link>
                                        </li>
                                        <li className={`nav-item ${pathname === "/services" ? "active" : ""}`} onClick={handleClose}>
                                            <Link to="/services" className="nav-link p-0 text-uppercase fw-semibold">Services</Link>
                                        </li>
                                        <li className={`nav-item ${pathname === "/blogs" || pathname.startsWith("/BlogDetails") ? "active" : ""}`} onClick={handleClose}>
                                            <Link to="/blogs" className="nav-link p-0 text-uppercase fw-semibold">Blogs</Link>
                                        </li>
                                        <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`} onClick={handleClose}>
                                            <Link to="/contact" className="nav-link p-0 text-uppercase fw-semibold">Contact</Link>
                                        </li>
                                    </ul>
                                    <a href="tel:#" className="btn prime-btn d-none d-sm-block py-2 px-3 text-capitalize rounded-0">
                                        <FontAwesomeIcon icon={faPhone} className="me-2" />  +1-123456789</a>
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler btn prime-outline-btn2 rounded-0 shadow-none py-2 px-3" type="button"
                            data-bs-target="#offcanvasNavbar2" data-bs-toggle="offcanvas" aria-controls="offcanvasNavbar2"
                            aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBarsStaggered} className="fs-5 para-text" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;
