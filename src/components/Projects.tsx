'use client'

import Image from "next/image";
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Project 1 : Static Resume</h3>
          <Image
            src="/images/static resume.jpg"
            alt="Static Resume"
            width={342}
            height={342}
            className="project-image"
          />
          <p className="project-description">
            A Static Resume/CV using HTML5, CSS3, Typescript with a button to hide/show skills.
          </p>
          <a
            target="blank"
            href="https://github.com/JaweriaMustafa-github/Hackathon-Projects.git"
            className="project-link"
          >
            View Github Repo
          </a>
          <button
            className="project-button"
            onClick={() =>
              window.open("https://static-resume-2.vercel.app", "_blank")
            }
          >
            Visit Project
          </button>
        </div>
        <div className="project-card">
          <h3 className="project-title">Project 2 : Dynamic Resume</h3>
          <Image
            src="/images/share-edit-resume.jpg"
            alt="Dynamic Resume"
            width={342}
            height={342}
            className="project-image"
          />
          <p className="project-description">
            A Dynamic Resume/CV Builder using HTML5, CSS3, Typescript.
          </p>
          <a
            target="blank"
            href="https://github.com/JaweriaMustafa-github/Hackathon-Projects.git"
            className="project-link"
          >
            View Github Repo
          </a>
          <button
            className="project-button"
            onClick={() =>
              window.open(
                "https://sharable-editable-resume-builder.vercel.app",
                "_blank"
              )
            }
          >
            Visit Project
          </button>
        </div>
        <div className="project-card">
          <h3 className="project-title">Project 3 : Icecreamo Website</h3>
          <Image
            src="/images/icecreamo.jpg"
            alt="Icecreamo Website"
            width={342}
            height={342}
            className="project-image"
          />
          <p className="project-description">
            <br />
            <br />
            <br />
            An Icecreamo Website by using Next.js and Tailwind CSS.
          </p>
          <a
            target="blank"
            href="https://github.com/JaweriaMustafa-github/icecreamo.git"
            className="project-link"
          >
            View Github Repo
          </a>
          <button
            className="project-button"
            onClick={() =>
              window.open("https://icecreamo.vercel.app", "_blank")
            }
          >
            Visit Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;