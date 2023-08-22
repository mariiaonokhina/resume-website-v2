import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
    return (
        <div className='MainContent'>
            <h1 className="projects-header">Projects</h1>
            <ProjectCard name='Pokémon Gallery' 
                        picture='https://github.com/mariiaonokhina/web102-pokemon-gallery/blob/main/Website%20Walkthrough.gif?raw=true' 
                        description='Developed an engaging website, enabling users to access Pokémon
                        details and images. Incorporated intuitive filtering functionality' 
                        languages='PokeAPI, React.js, HTML, CSS' 
                        github='https://github.com/mariiaonokhina/web102-pokemon-gallery' 
                        deployment='https://mariiaonokhina.github.io/web102-pokemon-gallery/'/>
            
            <ProjectCard name='What’s This Dog? Flashcard Game' 
                        picture='https://github.com/mariiaonokhina/web102-whats-this-dog-game-v2/blob/main/Website%20Walkthrough.gif?raw=true' 
                        description='Designed and implemented a flashcard game. Users engage in breed
                        identification through pictures, enhancing their knowledge and enjoying an interactive experience.' 
                        languages='React.js, HTML, and CSS' 
                        github='https://github.com/mariiaonokhina/web102-whats-this-dog-game-v2' 
                        deployment='https://mariiaonokhina.github.io/web102-whats-this-dog-game-v2/'/>
        </div>
    )
}

export default ProjectsPage;