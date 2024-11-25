import React from "react";

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'ReadMe Generator',
        description: 'A command-line application that can generate a README file for a project.',
        link: 'https://github.com/Accidori/Readme-generator'
    },
    {
        title: 'Vechicle Builder',
        description: 'A web application that allows the user to build a custom vehicle and interact with them.',
        link: 'https://github.com/Accidori/Vehicle-builder'
    },
    {
        title: 'Employee Tracker',
        description: 'A command line application that allows the user to view and manage the departments, roles, and employees in a company.',
        link: 'https://github.com/Accidori/Employee-Tracker'
    }
]



const Portfolio: React.FC = () => {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link}>Link</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio




















