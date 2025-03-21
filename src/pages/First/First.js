import React from 'react';
import std1 from '../../images/studentimg1.jpg';
import gradudationpng from '../../images/graduation.png';
import clappersvg from '../../images/clapper-board.svg';
import recordsvg from '../../images/record-btn-fill.svg';
import pencilsvg from '../../images/pencil-fill.svg';
import filesvg from '../../images/file-earmark-text.svg';
import passportsvg from '../../images/passport.svg';
import boxarwrytsvg from '../../images/box-arrow-in-right.svg';
import python from '../../images/python.webp';
import java from '../../images/java.webp';
import dbms from '../../images/dbms.webp';
import cplusplus from '../../images/c++.png';
import go from '../../images/go.png';
import sql from '../../images/sql.jpeg';
import './First.css';

export const First = () => {
    const openVideo = (url) => {
        window.open(url, '_blank'); // Opens the URL in a new tab
    };

    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <img src={gradudationpng} alt="Graduation Logo" />
                </div>
                <ul>
                    <div className="liandimgflex">
                        <img src={clappersvg} alt="Clapper Icon" />
                        <li className="active">Dashboard</li>
                    </div>
                    <div className="liandimgflex">
                        <img src={recordsvg} alt="Record Icon" />
                        <li>Payment Info</li>
                    </div>
                    <div className="liandimgflex">
                        <img src={pencilsvg} alt="Pencil Icon" />
                        <li>Registration</li>
                    </div>
                    <div className="liandimgflex">
                        <img src={filesvg} alt="File Icon" />
                        <li>Courses</li>
                    </div>
                    <div className="liandimgflex">
                        <img src={passportsvg} alt="Passport Icon" />
                        <li>Schedule</li>
                    </div>
                    <div className="liandimgflex">
                        <img src={boxarwrytsvg} alt="Logout Icon" />
                        <li>Logout</li>
                    </div>
                </ul>
            </div>
            <div className="main-content">
                <div className="welcome-banner">
                    <div className="welcome-text">
                        <p> </p>
                        <h2>Welcome to LMS </h2>
                        <p className="sub-text">Always stay updated in your student portal</p>
                    </div>
                    <div className="welcome-image">
                        <img src={std1} alt="Student Illustration" />
                    </div>
                </div>
                <h2>Programming Courses</h2>
                <div className="course-cards">
                    <div className="card">
                        <img src={python} alt="Python Logo" />
                        <h3>Python Programming</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/rfscVS0vtbw')}>
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <img src={java} alt="Java Logo" />
                        <h3>Java Programming</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/eIrMbAQSU34')}>
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <img src={dbms} alt="DBMS Logo" />
                        <h3>Database Systems</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/7S_tz1z_5bA')}>
                            Click Here
                        </button>
                    </div>
                </div>
                <div className="course-cards">
                    <div className="card">
                        <img src={cplusplus} alt="C++ Logo" />
                        <h3>C++</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/rfscVS0vtbw')}>
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <img src={go} alt="Go Logo" />
                        <h3>Go</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/eIrMbAQSU34')}>
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <img src={sql} alt="SQL Logo" />
                        <h3>SQL</h3>
                        <button className="view-button" onClick={() => openVideo('https://youtu.be/7S_tz1z_5bA')}>
                            Click Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

