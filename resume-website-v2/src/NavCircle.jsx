import React from "react";
import { useEffect, useState } from "react";

const NavCircle = (isNavOpen) => {
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        // setIsRotated(isNavOpen);
    }, []);
    
    return (
        <div></div>
    )
}

export default NavCircle;