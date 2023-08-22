import React from "react";
import ProjectsContent from './ProjectsContent';
import RotatingNav from "./RotatingNav";
import { useIsNavOpen } from './Context';

const ProjectsPage = () => {
    const { isNavOpen, setIsNavOpen } = useIsNavOpen();

    return (
        <div className='App-container'>
			<div id='App' className={isNavOpen? 'show-nav': ''}>
				<ProjectsContent />/
			</div>
            <RotatingNav />
		</div>
    )
}

export default ProjectsPage;