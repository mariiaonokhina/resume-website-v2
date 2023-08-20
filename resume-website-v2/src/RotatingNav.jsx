import React from "react";
import {Outlet, Link} from "react-router-dom";

const RotatingNav = () => {
 return (
    <nav>
        <ul>
            <li className='about-me-link' key='about-me-button'>
                <Link to='/resume-website-v2/about-me'>
                    <img src='/house-solid.svg' className="nav-img"/>
                    About Me
                </Link>
            </li>

            <li className='projects-link' key='projects-button'>
                <Link to='/resume-website-v2/projects'>
                    <img src='/star-solid.svg' className="nav-img"/>
                    Projects
                </Link>
            </li>

            <li className="resume-link" key='resume-button'>
                <Link to='/resume-website-v2/resume'>
                    <img src='/user-solid.svg' className="nav-img"/>
                    Resume
                </Link>
            </li>
        </ul>
    </nav>
 )
}

export default RotatingNav;