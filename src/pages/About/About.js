import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/AVERIXIS SOLUTION-01.png';
import sparkle from '../../images/Sparkle.png';
import Ellipse from '../../images/Ellipse 4 (1).png';
import Ellipse1 from '../../images/Ellipse 21 (1).png';
import Vector from '../../images/Vector 2.png';
import Frame from '../../images/Frame.png';
import blob from '../../images/blob.d48bc434.webp.png';
import curve from '../../images/curve.48e8b0de.webp.png';
import divc from '../../images/div.c-fixahf.png';
import starweb from '../../images/star.6e2b068c.webp.png';
import divcf1 from '../../images/div.c-fixahf (1).png';
import zigzag from '../../images/zigzag.f1995458.webp (1).png';
import star6 from '../../images/star.6e2b068c.webp.png';
import Rectangle18 from '../../images/Rectangle 18.png';
import Rectangle17 from '../../images/Rectangle 17.png';
import playbtn from '../../images/play-button.png';
import decor from '../../images/AVERIXIS SOLUTION-01.png';
import confident1 from '../../images/confident-teacher-explaining-lesson-pupils 1 (2).png';
import Mask from '../../images/Mask group.png'
import './About.css'


const About = () => {
    return (
        <div>
            <div>
                {/* <!-- NAVBAR START -->   */}

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <img src={logo} alt="Company Logo" width={100} height={100} className="mx-3" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/courses" className="nav-link">
                                        Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/enrollment" className="nav-link">
                                        Enrollment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/career" className="nav-link">
                                        Career
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link">
                                        Services
                                    </Link>
                                </li>
                            </ul>
                            <div className="nav-button">
                                <button className="mx-4 px-3 py-2"><a href="../Alverixis solutions/login.html ">LMS Login</a></button>
                                <button className="px-3 py-2"><a href="../Alverixis solutions/sign.html ">Sign Up</a></button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- NAVBAR END -->   */}

            </div>
            <img src={Mask} alt="Mask" className="mask" />
            <section className="About-page-main-content">
                <div className="Main-content-container">
                    <div className="left-container">
                        <div className="stars">
                            <img src={sparkle} alt="sparkle-img" />
                        </div>
                        <div className="blue-circle">
                            <img src={Ellipse} alt="small-dot" />
                        </div>
                        <div className="founded-Content">
                            <p>
                                "Founded in 2024 by a group of passionate educators and industry
                                experts, AVERIXIS SOLUTIONS was created to bridge the gap between
                                traditional education and the rapidly evolving demands of the
                                modern workforce. Recognizing the need for affordable, skill-based
                                learning that caters to real-world challenges, the founders set
                                out to build a platform focused on empowering individuals with
                                practical, industry-relevant skills.
                            </p>
                            <p>
                                From its beginnings, AVERIXIS SOLUTIONS has been driven by a
                                commitment to making education accessible to everyone, regardless
                                of background or location. Through continuous innovation, the
                                platform has grown to offer a diverse range of courses that span
                                technology, business, and professional development fields. The
                                platform combines expert-led instruction with hands-on projects,
                                enabling learners to gain not only theoretical knowledge but also
                                practical experience that employers value.
                            </p>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-container-heading">
                            <h2>ABOUT COMPANY</h2>
                        </div>
                        <div className="big-dot">
                            <img src={Ellipse1} alt="big-dot" />
                        </div>
                        <div className="right-container-content">
                            <img src={Rectangle18} alt="img 4" className="img-18" />
                            <img src={Rectangle17} alt="img 3" className="img-17" />
                            <img src={confident1} alt="img 2" className="Teacher" />
                            <img src={playbtn} alt="img 1" className="play" />
                        </div>
                    </div>
                </div>
            </section>



            {/* {<!-- ..........Section 2 ............ -->} */}

            <section className="cards-section">
                <div className="image-container">
                    <div className="heading-and-images">
                        <h2>Our Vision</h2>
                        <img src={Vector} alt="img" className="underline" />
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-1">
                        <div className="card-content-1">
                            <div className="circle-one">
                                <img src={Frame} alt="circle-one" width="30px" />
                            </div>
                            <h2>Global Accessibility</h2>
                            <p className="card-para">
                                To make high-quality, skill-based education accessible to
                                individuals worldwide, removing barriers to learning and growth.
                            </p>
                            <img src="./images/div.c-fixahf.png" alt="img-3" className="img-3" style={{ width: 20 }} />
                            <div className="card-container-images-1">
                                <img src={blob} alt="img 1" className="img 1" />
                                <img src={curve} alt="img 2" className="img 2" />
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-content-2">
                            <div className="circle-two">
                                <img src={Frame} alt="circle-one" width="30px" />
                            </div>
                            <h2>Empovering Careers</h2>
                            <p className="card-para">
                                To empower learners by equipping them with industry-relevant
                                skills that open doors to meaningful careers and lifelong success.
                            </p>
                            <img src={divc} alt="img-3" className="img-3" style={{ width: 20 }} />
                            <div className="card-content-images-2">
                                <img src={blob} alt="img 1" className="img 1" />
                                <img src={starweb} alt="img 2" className="img 2" />
                            </div>
                        </div>
                    </div>
                    <div className="card-3">
                        <div className="circle-three">
                            <img src={Frame} alt="img" style={{ width: 30 }} />
                        </div>
                        <div className="card-content-3">
                            <h2>Innovation and excellence</h2>
                            <p className="card-para">
                                To be a leader in educational innovation, delivering exceptional
                                learning experiences that inspire continuous growth and
                                professional development.
                            </p>
                            <img src={divcf1} alt="img-3" className="img-3" style={{ width: 20 }} />
                            <div className="bottom-images-3">
                                <img src={blob} alt="img 1" />
                                <img src={zigzag} alt="img 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!--........................... Section 3 cards ..................--> */}

            <section className="third-section">
                <h2>Our Mission</h2>
                <div className="image-mission-1">
                    <img src={Vector} alt="underline" />
                </div>
                <div className="mission-cards">
                    <div className="mission-card-1">
                        <div className="mission-content-1">
                            <img src={Frame} alt="circle-one" width="30px" />
                            <h3>Accessability for all</h3>
                            <p>
                                Make high-quality education accessible to learners across the
                                globe, regardless of their background or location.
                            </p>
                            <div className="dotted">
                                <img src={divcf1} alt="img 1" className="img-1" style={{ width: 30 }} />
                            </div>
                            <div className="mission-images">
                                <img src={blob} alt="img 2" className="img-2" />
                                <img src={zigzag} alt="img 3" className="img-3" />
                            </div>
                        </div>
                    </div>
                    <div className="mission-card-2">
                        <div className="mission-content-2">
                            <img src={Frame} alt="circle-one" width="30px" />
                            <h3>Empowering Skill Development</h3>
                            <p>
                                Equip individuals with practical, industry-relevant skills to
                                thrive in today’s dynamic job market.
                            </p>
                            <img src={divc} alt="img 1" style={{ width: 30 }} />
                            <div className="mission-pics">
                                <img src={blob} alt="img 2" className="img 2" style={{ width: 150 }} />
                                <img src={curve} alt="img 3" className="img 3" />
                            </div>
                        </div>
                    </div>
                    <div className="mission-card-3">
                        <div className="mission-content-3">
                            <div className="heading-content-2">
                                <h3 className="heading-head-pic">1</h3>
                            </div>
                            <h3>Innovation in Learning</h3>
                            <p>
                                Continuously evolve our learning methods and content to meet the
                                changing needs of students and industries alike.
                            </p>
                            <img src={divc} alt="img1" style={{ width: 30 }} />
                            <div className="images-card3">
                                <img src={blob} alt="img 2" className="img 2" style={{ width: 150 }} />
                                <img src={star6} alt="img 3" className="img 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- .............Section 4........ --> */}
            <section>
                <div className="section-4-content">
                    <div className="left-content">
                        <div className="content-para-layout">
                            <div className="para-heading">
                                <h3>Why choose <span>avengers solutions</span></h3>
                            </div>
                            <div className="para-content-text">
                                <p>
                                    Industry-Recognized Certifications: “Our certifications hold
                                    value with top employers in the industry.
                                    <br />
                                    Student-Centric Learning: “We put our learners first with
                                    features like live support, feedback on projects, and community
                                    forums.” industry.”
                                </p>
                            </div>
                            <div className="learn-more-link-div">
                                <a href>learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="rightcontent-images-contaienr">
                            <img src={Rectangle18} alt="img 1" className="img-fluid mb-3" style={{ maxWidth: 100 }} />
                            <img src={Rectangle17} alt="img 2" className="img-fluid mb-3" style={{ maxWidth: 80 }} />
                            <img src={confident1} alt="img 3" className="img-fluid mb-3 Teacher" style={{ maxWidth: 420 }} />
                            <img src={playbtn} alt="img 4" className="img-fluid" style={{ maxWidth: 100 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- FOOTER START --> */}
            <footer>
                <div className="footer-nav">
                    <div className="averixis-solutions">
                        <img src={decor} alt="" width="80px" height="80px" className="mx-5" />
                        <h3 className="footer-heading">AVERIXIS SOLUTIONS</h3>
                        <p>
                            Averixis delivers innovative technology and education solutions to drive growth, innovation, and success.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/averixis-solutions-86230833a/" className="linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/averixis_solutions/profilecard/?igsh=NnRjYjFpZnY0Zmo4" className="instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/918431111080" target="_blank" className="whatsapp" rel="noreferrer">
                                <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61569439897349" className="facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="nav-section">
                        <h3 className="footer-heading">Company</h3>
                        <ul>
                            <li><Link to="/" >
                                Home
                            </Link></li>
                            <li><Link to="/about" >
                                About
                            </Link></li>
                            <li><Link to="/courses" >
                                Courses
                            </Link></li>
                            <li> <Link to="/enrollment" >
                                Enrollment
                            </Link></li>
                            <li><Link to="/career" >
                                Career
                            </Link></li>
                            <li><Link to="/services" >
                                Services
                            </Link></li>
                        </ul>
                    </div>
                    <div className="nav-section">
                        <h3 className="footer-heading">Category</h3>
                        <ul>
                            <li><a href="#cat">CSE/IT</a></li>
                            <li><a href="#cat">ECE/EEE</a></li>
                            <li><a href="#cat">Civil</a></li>
                            <li><a href="#cat">Mechanical</a></li>
                            <li><a href="#cat">Management</a></li>
                        </ul>
                    </div>
                    <div className="nav-section" style={{ textAlign: 'center', flex: 1, minWidth: 150 }}>
                        <h3 className="footer-heading" style={{ fontSize: 20, fontWeight: 'bold' }}>Contact Us</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Phone Number with Icon */}
                                <li style={{ margin: '10px 0', fontSize: 14, marginLeft: '-35px' }}>
                                    <a href="tel:+918431111080" style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-phone-alt" style={{ marginRight: 8, fontSize: 18 }} />+91 843 111 1080
                                    </a>
                                </li>
                                {/* Email Address with Icon */}
                                <li style={{ margin: '10px 0', fontSize: 14, marginRight: '-35px' }}>
                                    <a href="mailto:averixissolutions@gmail.com" style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-envelope" style={{ marginRight: 8, fontSize: 18 }} />averixissolutions@gmail.com
                                    </a>
                                </li>
                                {/* Address with Icon */}
                                <li style={{ margin: '20px 0', fontSize: 14, marginLeft: 50 }}>
                                    <a href="https://www.google.com/maps?q=9,+2nd+floor+Outer+Ring+Rd,+BTM+2nd+Stage,+Kuvempu+Nagar,+Stage+2,+BTM+Layout,+Bengaluru,+Karnataka+560076" target="_blank" rel="noreferrer" style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-map-marker-alt" style={{ marginRight: 6, fontSize: 18 }} />9, 2nd floor Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560076
                                    </a>
                                </li>
                            </ul>
                        </ul></div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Averixis Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}


export default About