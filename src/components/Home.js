import React from 'react'
import google from '../images/google.png'
import netflix from '../images/netflix.png'
import airbnb from '../images/airbnb.png'
import logo from "../images/AVERIXIS SOLUTION-01.png";
import profile from "../images/profile.jpg";
import girl from '../images/girl.png'
import amazon from '../images/amazon.png'
import facebook from '../images/facebook.png'
import grab from '../images/grab.png'
import star from '../images/star.png'
import doc from '../images/doc-img.jpg'
import star1 from '../images/star.png'
import starbg from '../images/star-bg.png'
import staroutbg from '../images/star-out-bg.png'
import stars from '../images/stars.png'
import setting from '../images/setting.jpg'
import wave from '../images/wave.png'
import category1 from '../images/cateogry1.jpg'
import category2 from '../images/cateogry2.jpg'
import category3 from '../images/cateogry3.jpg'
import category4 from '../images/cateogry4.jpg'
import category5 from '../images/cateogry5.jpg'
import question1 from '../images/question1.png'
import question2 from '../images/question2.png'
import call from '../images/call.png'
import tools from '../images/tool & teacher & learn.png'
import testimonials from '../images/testimonials.png'
import { Link } from "react-router-dom";


const Home = () => {


  return (
    <div >
      <div>
        {/* NAVBAR START */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img
              src={logo}
              alt="Averixis Logo"
              width="100"
              height="100"
              className="mx-3"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/cources" className="nav-link">
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
                <button className="mx-4 px-3 py-2">
                  <a href="/login">LMS Login</a>
                </button>
                <button className="px-3 py-2">
                  <a href="/signup">Sign Up</a>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* NAVBAR END */}

        {/* BANNER START */}
        <div className="bg-cream">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start">
            {/* Left Column */}
            <div className="flex flex-col w-full lg:w-6/12 lg:pt-24 items-start lg:text-left mb-5 md:mb-0">
              <div className="content">
                <h2>
                  Innovating Today, <br />
                  Empowering Tomorrow.
                </h2>
                <p className="h5">
                  At Averixis, we create solutions that drive growth,
                  <br />
                  inspire change, and shape the future.
                </p>
              </div>

              <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5 join">
                <button className="lg:mx-0 text-xl font-bold btn">
                  Join htmlFor free
                </button>
                <div className="flex items-center justify-center space-x-3 mt-2 watch">
                  <button className="w-14 h-14 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-play px-2"></i>
                  </button>
                  <span className="cursor-pointer">Watch how it works</span>
                </div>
              </div>
              <div className="courses py-5">
                <span className="px-4">
                  <b className="text-warning zero">1000+</b>
                  <br />
                  <b className="h6">
                    Course to <br /> choose from
                  </b>
                </span>

                <span className="px-4">
                  <b className="text-info zero">5000</b>
                  <br />
                  <b className="h6">
                    Students <br /> Trainers
                  </b>
                </span>

                <span className="px-4">
                  <b className="text-danger zero">300+</b>
                  <br />
                  <b className="h6">
                    Professional <br /> Trainers
                  </b>
                </span>
              </div>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-6/12 lg:-mt-15 relative" id="girl">
              <img
                className="w-10/12 mx-auto 2xl:-mb-20"
                src={girl}
                alt="Illustration"
              />
              {/* Calendar */}
              <div className="absolute text-block px-2">
                <div className="calendra text-center my-4 mx-3">
                  <span className="calen bg-info p-2 rounded">
                    <i className="fa-solid fa-calendar-days text-white"></i>
                  </span>
                </div>
                <div className="calen-content">
                  <h4>500k</h4>
                  <p>Assisted Student</p>
                </div>
              </div>
              {/* Red Icon */}
              <div className="text-icon absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16">
                <div className="icon bg-light py-2">
                  <i className="fa-solid fa-chart-simple"></i>
                </div>
              </div>
              {/* UX Class */}
              <div className="absolute text-msg px-2">
                <div className="envelop my-4 mx-3">
                  <span className="p-2 bg-warning rounded">
                    <i className="fa-solid fa-envelope text-white"></i>
                  </span>
                </div>
                <div className="envelop-content">
                  <h4>Congratulations</h4>
                  <p>Your Admission Completed</p>
                </div>
              </div>
              {/* Congrats */}
              <div className="absolute text-className px-2">
                <div className="profile my-4 mx-3">
                  <span className="prof">
                    <img
                      src={profile}
                      alt="Profile"
                    />
                  </span>
                </div>

                <div className="className-prof my-2">
                  <h5>User Experience Class</h5>
                  <p>Today at 12.00 PM</p>
                  <button className="btn rounded-5 bg-danger text-white">
                    Join Now
                  </button>
                </div>
              </div>
              <div className="circle"></div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          </div>
          <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
            <svg
              className="xl:h-40 xl:w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="bg-white w-full h-20 -mt-px"></div>
          </div>
        </div>
        {/* BANNER END */}

        {/* Trusted By */}
        <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-secondary overflow-x-hidden">
          <div className="max-w-4xl mx-auto trusted relative">
            <h4 className="text-center my-4 text-secondary">
              Trusted by 5,000+ Companies Worldwide
            </h4>
            <div className="circle4"></div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center trusted-img">
              <img
                className="px-4 h-7"
                src={google}
                alt="Google"
              />
              <img
                className="px-4 h-7"
                src={netflix}
                alt="Netflix"
              />
              <img
                className="px-4 h-7"
                src={airbnb}
                alt="Airbnb"
              />
              <img
                className="px-4 h-7 transform translate-y-2"
                src={amazon}
                alt="Amazon"
              />
              <img
                className="px-4 h-7 face"
                src={facebook}
                alt="Facebook"
              />
              <img
                className="px-4 h-7 grab"
                src={grab}
                alt="Grab"
              />
            </div>

            <span className="star1 absolute">
              <img
                src={star1}
                alt="Star Background"
              />
            </span>
            <span className="stars1 absolute">
              <img
                src={stars}
                alt="Stars"
              />
            </span>
          </div>
        </div>




        {/* <!-- CARDS START --> */}

        <section id="cards" className="relative">
          <div className="card makeimagesmall">
            <img className='img1' src={doc} alt="" />
            <h2 className="text-primary-emphasis">Our Vision</h2>

            <p className="text-secondary"> To be a trusted global partner delivering cutting-edge, customer-centric solutions that drive innovation, scalability, and lasting success htmlFor businesses worldwide.
            </p>

          </div>


          <div className="card">
            <img className='img2' src={setting} alt="settings" />
            <h2 className="text-primary-emphasis">Our Mission</h2>

            <p className="text-secondary">To empower businesses with innovative, end-to-end solutions by leveraging expertise, fostering collaboration, and delivering exceptional value that fuels sustainable growth and success.
            </p>

          </div>
          <span className="wave2 absolute"><img src={wave} alt="Wave" /></span>
          <div className="circle5"></div>
          <div className="circle6"></div>
        </section>

        {/* <!-- CARDS END -->
            <!-- QUESTION START -->*/}

        <div className="question">
          <div className="text-center max-w-screen-md mx-auto content">
            <h1 className=" text-center text-primary-emphasis">Why<span className=" text-center  text-warning px-2">AVERIXIS?</span></h1>
            <p className="text-secondary fs-5 para">We combine industry expertise, innovative solutions, and a customer-centric approach to deliver scalable,
              future-ready services that drive success and long-term growth.</p>
          </div>
          <div className="flex-col md:flex-row justify-center question-img">
            <div className="question1 mx-5">
              <img className="rounded-2xl " src={question1} alt="" />
              <div className="question2  bg-black bg-opacity-10">
                <div className="course">
                  <h1 className="uppercase text-white text-center text-sm lg:text-xl mb-3 fs-3">FOR INSTRUCTORS</h1>
                  <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 fs-5 font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">Start a className today</button>
                </div>
              </div>
            </div>
            <div className="question1 mx-5">
              <img className="rounded-2xl" src={question2} alt="" />
              <div className="question2  bg-black bg-opacity-10">
                <div className="course">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3 fs-3">FOR STUDENTS</h1>
                  <button className="rounded-full text-white text-xs lg:text-md px-6 py-3 fs-5 font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out bg-info">Enter access code</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <!-- QUESTION END --> */}


        {/*<!-- CAREGORIES START --> */}

        <h1 className="text-primary-emphasis text-center justify-center my-5">CATEGORIES</h1>

        <div className="category row mx-3">

          <div className="card-wrapper col col-lg-4 my-3">
            <img src={star} alt="Star" />

            <a href="Alverixis solutions\webdevelopment.html" className="read-more">CSE/IT</a>
          </div>
          <div className="card-wrapper col col-lg-4 my-3">
            <img src={stars} alt="Stars" />
            <article />
            <a href="#myproj" className="read-more">ECE/EEE</a>
          </div>

          <div className="card-wrapper col col-lg-4 my-3">
            <img src={staroutbg} alt="Star Background" />

            <a href="#myproj" className="read-more">MECHANICAL</a>
          </div>

          <div className="card-wrapper col col-lg-4 my-4 card-imgs">
            <img src={profile} alt="Profile" />
            <a href="#myproj" className="read-more">CIVIL</a>
          </div>

          <div className="card-wrapper col col-lg-4 my-4">
            <img src={testimonials} alt="Testimonials" />
            <a href="#myproj" className="read-more">MANAGAMENT</a>
          </div>
        </div>


        {/* <!-- CATEGORIES END --> 
            <!-- IDENTITY START --> */}

        <div className="identity">

          {/* <!-- TOP START --> */}

          <div className="identy-top">
            <b className="our-identity fs-3">OUR<span className=" text-warning px-2">IDENTITY</span></b>
            <p className="text-black fs-5  text-center">Defining Excellence and<span className="text-warning">Innovation</span></p>
            <p className="text-black fs-5 identity-para text-center justify-center">At Averixis, we are a dynamic team of innovators, strategists, and problem-solvers dedicated to delivering exceptional solutions. Our commitment to quality and customer
              satisfaction defines who we are and drives everything we do.</p>
          </div>

          {/* <!-- TOP END -->
              <!-- LEFT RIGHT START --> */}

          <div className="identity-left-right">

            {/* <!-- LEFT START --> */}

            <div className="identity-left">
              <div className="top-big-color left-4 -top-12"></div>
              <div className="top-small-color left-36 -top-12"></div>
              <img className="z-50 floating" src={call} alt="" />
              <div className="bottom-big-color right-16 bottom-1"></div>
              <div className="bottom-small-color right-52"></div>

              {/* <!-- LEFT END --> */}
            </div>
            {/* <!--RIGHT START  --> */}

            <div className="mt-20 md:mt-0 text-gray-500 identity-right">

              <div className="flex items-center space-x-5 my-2">
                <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D" />
                  </svg>
                </div>
                <b className="fs-1 text-danger">1231+</b>
              </div>
              <h5 className="text-black px-5 mb-5">Happy Students</h5>
              <div className="flex items-center space-x-5 my-2">
                <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="11.8182" height="11.8182" fill="#2F327D" />
                    <rect y="14.1816" width="11.8182" height="11.8182" fill="#2F327D" />
                    <rect x="14.7727" width="11.8182" height="11.8182" fill="#2F327D" />
                    <rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#F48C06" />
                  </svg>
                </div>
                <b className="fs-1 thirtyfive">35+</b>
              </div>
              <h5 className="text-black px-5 mb-5">Quality educator</h5>
              <div className="flex items-center space-x-5 my-2">
                <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="20" height="20" fill="#2F327D" />
                    <rect width="21.2245" height="21.2245" fill="#F48C06" />
                  </svg>
                </div>
                <b className="fs-1 eighteen">18+</b>
              </div>
              <h5 className="text-black px-5 ">Premium Courses</h5>

            </div>

            {/* <!-- RIGHT END --> */}

          </div>

          {/* <!-- RIGHT LEFT END --> */}


        </div>

        {/* <!-- IDENTITY END -->
             <!-- TOOLS AND TEACHER & LEARNING START --> */}


        <div className="tools flex-col md:flex-row items-center md:space-x-10 mt-16 relative">
          <div className="tool-color absolute"></div>
          <div data-aos="fade-right" className="tools-content relative">
            <h1 className="text-primary-emphasis font-semibold text-4xl px-5"><span className="text-yellow-500">Tools</span> For Teachers <br /> And Learners</h1>
            <p className="text-gray-500 my-4 fs-5 px-5">Empowering Education We provide innovative tools designed to enhance teaching methodologies and streamline learning experiences.
              Our solutions bridge the gap between educators and learners, fostering engagement, collaboration, and growth.</p>
          </div>
          <img src={category5} alt="CSE/IT Category" />

        </div>



        {/* <!--TOOLS AND TEACHER & LEARNING END <!-- TESTIMONAL START --> */}

        <div className="mt-24 flex flex-col-reverse md:flex-row items-start testimonials relative">
          <div className="testimonial">
            <div className="flex items-center space-x-20 mb-5">
              <span className="border border-gray-500 w-14 absolute"></span>
              <h1 className="text-gray-500 tracking-widest fs-6">TESTIMONIAL</h1>
            </div>
            <h1 className="font-semibold text-5xl ">What They Say?</h1>
            <p className="text-gray-500 my-3 fs-5">Averixis has transformed the way we approach our challenges. Their innovative solutions exceeded our expectations!</p>
            <p className="text-gray-500 my-3 fs-5">The team at Averixis is professional, responsive, and truly understands our needs. Their customer-centric approach is commendable.</p>
            <p className="text-gray-500 my-3 fs-5">The solutions provided by Averixis are both innovative and practical, making a real impact on our business.</p>
            <button className="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 my-4 rounded-full">
              <span>Write your assessment</span>
              <div className="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-warning"></i>
              </div>
            </button>
          </div>
          <div className="testimonial-img relative">
            <img src={category1} alt="ECE/EEE Category" />
            <span className="wave absolute"><img src="Alverixis solutions/images/cateogry2.jpg" alt="Mechanical Category" /></span>

          </div>

          <span className="wave1 absolute"><img src={wave} alt="Wave" /></span>
          <span className="star absolute"><img src={category3} alt="Civil Category" /></span>
          <span className="stars absolute"><img src={category4} alt="Management Category" /></span>
          <span className="stars-out-bg absolute"><img src={{ tools }} alt="Tools and Teachers" /></span>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="circle10"></div>
        </div>

        {/*<!-- TESTIMONAL END --> */}

      </div>

      {/* <!-- FAQ START --> */}
      Copy
      {/* CARDS START */}
      <section id="cards" className="relative">
        <div className="card makeimagesmall">
          <img className="img1" src={doc} alt="Document" />
          <h2 className="text-primary-emphasis">Our Vision</h2>
          <p className="text-secondary">
            To be a trusted global partner delivering cutting-edge, customer-centric solutions that drive innovation, scalability, and lasting success htmlFor businesses worldwide.
          </p>
        </div>

        <div className="card">
          <img className="img2" src={setting} alt="Settings" />
          <h2 className="text-primary-emphasis">Our Mission</h2>
          <p className="text-secondary">
            To empower businesses with innovative, end-to-end solutions by leveraging expertise, fostering collaboration, and delivering exceptional value that fuels sustainable growth and success.
          </p>
        </div>
        <span className="wave2 absolute">
          <img src={wave} alt="Wave" />
        </span>
        <div className="circle5"></div>
        <div className="circle6"></div>
      </section>
      {/* CARDS END */}

      {/* QUESTION START */}
      <div className="question">
        <div className="text-center max-w-screen-md mx-auto content">
          <h1 className="text-center text-primary-emphasis">
            Why<span className="text-center text-warning px-2">AVERIXIS?</span>
          </h1>
          <p className="text-secondary fs-5 para">
            We combine industry expertise, innovative solutions, and a customer-centric approach to deliver scalable, future-ready services that drive success and long-term growth.
          </p>
        </div>
        <div className="flex-col md:flex-row justify-center question-img">
          <div className="question1 mx-5">
            <img className="rounded-2xl" src={question1} alt="Instructors" />
            <div className="question2 bg-black bg-opacity-10">
              <div className="course">
                <h1 className="uppercase text-white text-center text-sm lg:text-xl mb-3 fs-3">FOR INSTRUCTORS</h1>
                <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 fs-5 font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Start a className today
                </button>
              </div>
            </div>
          </div>
          <div className="question1 mx-5">
            <img className="rounded-2xl" src={question2} alt="Students" />
            <div className="question2 bg-black bg-opacity-10">
              <div className="course">
                <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3 fs-3">FOR STUDENTS</h1>
                <button className="rounded-full text-white text-xs lg:text-md px-6 py-3 fs-5 font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out bg-info">
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* QUESTION END */}

      {/* CATEGORIES START */}
      <h1 className="text-primary-emphasis text-center justify-center my-5">CATEGORIES</h1>
      <div className="category row mx-3">
        <div className="card-wrapper col col-lg-4 my-3">
          <img className="card-category" src={category5} alt="CSE/IT" />
          <a href="Alverixis solutions/webdevelopment.html" className="read-more">CSE/IT</a>
        </div>
        <div className="card-wrapper col col-lg-4 my-3">
          <img className="card-category" src={category1} alt="ECE/EEE" />
          <article />
          <a href="#myproj" className="read-more">ECE/EEE</a>
        </div>
        <div className="card-wrapper col col-lg-4 my-3">
          <img className="card-category" src={category2} alt="Mechanical" />
          <a href="#myproj" className="read-more">MECHANICAL</a>
        </div>
        <div className="card-wrapper col col-lg-4 my-4 card-imgs">
          <img className="card-category" src={category3} alt="Civil" />
          <a href="#myproj" className="read-more">CIVIL</a>
        </div>
        <div className="card-wrapper col col-lg-4 my-4">
          <img className="card-category" src={category4} alt="Management" />
          <a href="#myproj" className="read-more">MANAGEMENT</a>
        </div>
      </div>
      {/* CATEGORIES END */}

      {/* IDENTITY START */}
      <div className="identity">
        <div className="identy-top">
          <b className="our-identity fs-3">OUR<span className="text-warning px-2">IDENTITY</span></b>
          <p className="text-black fs-5 text-center">Defining Excellence and<span className="text-warning">Innovation</span></p>
          <p className="text-black fs-5 identity-para text-center justify-center">
            At Averixis, we are a dynamic team of innovators, strategists, and problem-solvers dedicated to delivering exceptional solutions. Our commitment to quality and customer satisfaction defines who we are and drives everything we do.
          </p>
        </div>

        <div className="identity-left-right">
          <div className="identity-left">
            <div className="top-big-color left-4 -top-12"></div>
            <div className="top-small-color left-36 -top-12"></div>
            <img className="z-50 floating" src={call} alt="Call" />
            <div className="bottom-big-color right-16 bottom-1"></div>
            <div className="bottom-small-color right-52"></div>
          </div>

          <div className="mt-20 md:mt-0 text-gray-500 identity-right">
            <div className="flex items-center space-x-5 my-2">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D" />
                </svg>
              </div>
              <b className="fs-1 text-danger">1231+</b>
            </div>
            <h5 className="text-black px-5 mb-5">Happy Students</h5>
            <div className="flex items-center space-x-5 my-2">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="11.8182" height="11.8182" fill="#2F327D" />
                  <rect y="14.1816" width="11.8182" height="11.8182" fill="#2F327D" />
                  <rect x="14.7727" width="11.8182" height="11.8182" fill="#2F327D" />
                  <rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#F48C06" />
                </svg>
              </div>
              <b className="fs-1 thirtyfive">35+</b>
            </div>
            <h5 className="text-black px-5 mb-5">Quality educator</h5>
            <div className="flex items-center space-x-5 my-2">
              <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="6" width="20" height="20" fill="#2F327D" />
                  <rect width="21.2245" height="21.2245" fill="#F48C06" />
                </svg>
              </div>
              <b className="fs-1 eighteen">18+</b>
            </div>
            <h5 className="text-black px-5">Premium Courses</h5>
          </div>
        </div>
      </div>
      {/* IDENTITY END */}

      {/* TOOLS AND TEACHER & LEARNING START */}
      <div className="tools flex-col md:flex-row items-center md:space-x-10 mt-16 relative">
        <div className="tool-color absolute"></div>
        <div data-aos="fade-right" className="tools-content relative">
          <h1 className="text-primary-emphasis font-semibold text-4xl px-5">
            <span className="text-yellow-500">Tools</span> For Teachers <br /> And Learners
          </h1>
          <p className="text-gray-500 my-4 fs-5 px-5">
            Empowering Education We provide innovative tools designed to enhance teaching methodologies and streamline learning experiences. Our solutions bridge the gap between educators and learners, fostering engagement, collaboration, and growth.
          </p>
        </div>
        <img className="girl-book relative" src={tools} alt="Tools and Learning" />
      </div>
      {/* TOOLS AND TEACHER & LEARNING END */}

      {/* TESTIMONIAL START */}
      <div className="mt-24 flex flex-col-reverse md:flex-row items-start testimonials relative">
        <div className="testimonial">
          <div className="flex items-center space-x-20 mb-5">
            <span className="border border-gray-500 w-14 absolute"></span>
            <h1 className="text-gray-500 tracking-widest fs-6">TESTIMONIAL</h1>
          </div>
          <h1 className="font-semibold text-5xl">What They Say?</h1>
          <p className="text-gray-500 my-3 fs-5">Averixis has transformed the way we approach our challenges. Their innovative solutions exceeded our expectations!</p>
          <p className="text-gray-500 my-3 fs-5">The team at Averixis is professional, responsive, and truly understands our needs. Their customer-centric approach is commendable.</p>
          <p className="text-gray-500 my-3 fs-5">The solutions provided by Averixis are both innovative and practical, making a real impact on our business.</p>
          <button className="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 my-4 rounded-full">
            <span>Write your assessment</span>
            <div className="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-warning"></i>
            </div>
          </button>
        </div>
        <div className="testimonial-img relative">
          <img className="mx-auto" src={testimonials} alt="Testimonials" />
          <span className="wave absolute">
            <img src="Alverixis solutions/images/wave.png" alt="Wave" />
          </span>
        </div>

        <span className="wave1 absolute">
          <img src={wave} alt="Wave" />
        </span>
        <span className="star absolute">
          <img src={star} alt="Star" />
        </span>
        <span className="stars absolute">
          <img src={stars} alt="Stars" />
        </span>
        <span className="stars-out-bg absolute">
          <img src={starbg} alt="Star Background" />
        </span>
        <div className="circle7"></div>
        <div className="circle8"></div>
        <div className="circle9"></div>
        <div className="circle10"></div>
      </div>

      {/* FAQ START */}
      <div className="faq">
        <div className="container faq-content-que">
          <div className="faq-content">
            <button className="faq-bt fs-6">FAQ</button>
            <h1 className="py-4">
              What would be like to <br /> know about<strong> AVERIXIS</strong>?
            </h1>
          </div>

          <div className="faq-quest py-3">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    1. What does Averixis specialize in?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-div">
                    Averixis specializes in delivering innovative, end-to-end solutions in technology and education, empowering businesses and learners to achieve their goals.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    2. How does Averixis approach its projects?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-div">
                    We adopt a customer-centric approach, focusing on collaboration, transparency, and tailored strategies to deliver exceptional results every time.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    3. What industries does Averixis cater to?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-div">
                    Averixis serves diverse industries, including technology, education, and business enterprises, providing scalable solutions designed to meet unique needs.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    4. Why should someone choose Averixis?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-div">
                    Averixis combines expertise, innovation, and reliability to provide value-driven solutions, making us a trusted partner htmlFor sustainable growth and success.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    5. What is Averixis' vision htmlFor the future?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-div">
                    Our vision is to become a global leader in delivering cutting-edge solutions that drive innovation, collaboration, and long-term impact across industries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle11"></div>
      </div>
      {/* FAQ END */}

      {/* FOOTER START */}
      <footer>
        <div className="footer-nav">
          <div className="averixis-solutions">
            <img
              src={logo}
              alt="Averixis Logo"
              width="80px"
              height="80px"
              className="mx-5"
            />
            <h3 className="footer-heading">AVERIXIS SOLUTIONS</h3>
            <p>
              Averixis delivers innovative technology and education solutions to drive growth, innovation, and success.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/averixis-solutions-86230833a/"
                className="linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/averixis_solutions/profilecard/?igsh=NnRjYjFpZnY0Zmo4"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918431111080"
                className="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569439897349"
                className="facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="nav-section">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="#skills">Enrollment</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#services">Services</a></li>
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

          <div className="nav-section" style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
            <h3 className="footer-heading" style={{ fontSize: '20px', fontWeight: 'bold' }}>Contact Us</h3>
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }} />
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Phone Number with Icon */}
              <li style={{ margin: '10px 0', fontSize: '14px', marginLeft: '-35px' }}>
                <a
                  href="tel:+918431111080"
                  style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fas fa-phone-alt" style={{ marginRight: '8px', fontSize: '18px' }}></i>+91 843 111 1080
                </a>
              </li>
              {/* Email Address with Icon */}
              <li style={{ margin: '10px 0', fontSize: '14px', marginRight: '-35px' }}>
                <a
                  href="mailto:averixissolutions@gmail.com"
                  style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fas fa-envelope" style={{ marginRight: '8px', fontSize: '18px' }}></i>averixissolutions@gmail.com
                </a>
              </li>
              {/* Address with Icon */}
              <li style={{ margin: '20px 0', fontSize: '14px', marginLeft: '50px' }}>
                <a
                  href="https://www.google.com/maps?q=9,+2nd+floor+Outer+Ring+Rd,+BTM+2nd+Stage,+Kuvempu+Nagar,+Stage+2,+BTM+Layout,+Bengaluru,+Karnataka+560076"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#333', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '6px', fontSize: '18px' }}></i>9, 2nd floor Outer Ring Rd, BTM 2nd Stage, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560076
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Averixis Solutions. All rights reserved.</p>
        </div>
      </footer>
      {/* FOOTER END */}


    </div >
  )
}

export default Home