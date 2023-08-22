import React from "react";
import {Link} from "react-router-dom";
import { useIsNavOpen } from './Context';

const RotatingNav = () => {
    const { isNavOpen, setIsNavOpen } = useIsNavOpen();

    return (
        <nav>
            <ul>
                <li className='home-link' key='home-button'>
                    <Link to='/' onClick={() => setIsNavOpen(false)}>
                        <img src='/house-solid.svg' className="nav-img"/>
                        Home
                    </Link>
                </li>

                <li className='about-me-link' key='about-me-button'>
                    <Link to='/about' onClick={() => setIsNavOpen(false)}>
                        <img src='/question-solid.svg' className="nav-img"/>
                        About Me
                    </Link>
                </li>

                <li className='projects-link' key='projects-button'>
                    <Link to='/projects' onClick={() => setIsNavOpen(false)}>
                        <img src='/star-solid.svg' className="nav-img"/>
                        Projects
                    </Link>
                </li>

                <li className="resume-link" key='resume-button'>
                    <a href='https://drive.google.com/file/d/1HVvyPR7R04oZhc1OBspwrWVA7lucJFM0/view?usp=sharing'>
                        <img src='/user-solid.svg' className="nav-img"/>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
 )
}

export default RotatingNav;