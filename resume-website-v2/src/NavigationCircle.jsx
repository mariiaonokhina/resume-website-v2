import React from "react";
import { useIsNavOpen } from './Context';

const NavigationCircle = () => {
    const { isNavOpen, setIsNavOpen } = useIsNavOpen();

    return (
        <div className="circle-container">
            <div className="circle" id={isNavOpen? 'rotate-circle': ''}>
                <button id="close-nav-btn" onClick={() => {setIsNavOpen(false)}}>
                    <img className="close-nav-img" src='./x.svg'></img>
                </button>

                <button id="open-nav-btn" onClick={() => {setIsNavOpen(true)}}>
                    <img className='bars-img' src='./bars-solid.svg'></img>
                </button>
            </div>
        </div>
    )
}

export default NavigationCircle;