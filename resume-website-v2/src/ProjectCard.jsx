import React from "react";

const ProjectCard = ({name, picture, description, languages, github, deployment}) => {
    return (
        <div className="ProjectCard">
            <h2 className="project-name">{name}</h2>
            <img className='project-img' src={picture}></img>
            <p className="project-description">{description}</p>
            <p className="project-languages">Languages: {languages}</p>
            <div className="project-buttons-container">
                <a href={github}><button className="project-button github-project-link">GitHub</button></a>
                <a href={deployment}><button className="project-button deployment-project-link">View</button></a>
            </div>
        </div>
    )
}

export default ProjectCard;