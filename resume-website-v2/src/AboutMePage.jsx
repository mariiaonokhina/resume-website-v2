import React from "react";
import RotatingNav from "./RotatingNav";
import AboutMeContent from "./AboutMeContent";
import { useIsNavOpen } from './Context';

const AboutMePage = () => {
    const { isNavOpen, setIsNavOpen } = useIsNavOpen();
    
    return (
        <div className='App-container'>
			<div id='App' className={isNavOpen? 'show-nav': ''}>
				<AboutMeContent />/
			</div>
            <RotatingNav />
		</div>
    )
}

export default AboutMePage;