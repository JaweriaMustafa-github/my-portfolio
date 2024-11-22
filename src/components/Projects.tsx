'use client'

import Image from "next/image";
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <h2 className="text-4xl text-center mb-10 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        <div className="border p-5 bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold">Project 1 : Static Resume</h3>
          <Image src="/images/static resume.jpg" alt='Cowntdown-timer' width={342} height={342} className="pt-2"></Image>
          <p className="pt-2">A Static Resume/CV using HTML5, CSS3, Typescript with a button to hide/show skills.</p>
          <a target="blank" href="https://github.com/JaweriaMustafa-github/Hackathon-Projects.git" className="text-cyan-500 mt-2 block hover:text-pink-500">View Github Repo</a>
          <button
         className="bg-cyan-500 text-white rounded-full w-36 hover:bg-pink-500"
         onClick={() =>
         window.open("https://static-resume-2.vercel.app", "_blank")
         }
        >
           Visit Project
        </button>
        </div>
        <div className="border p-5 bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold">Project 2 : Dynamic Resume</h3>
          <Image src="/images/share-edit-resume.jpg" alt='Cowntdown-timer' width={342} height={342} className="pt-2"></Image>
          <p>A Dynamic Resume/CV Builder using HTML5, CSS3, Typescript.</p>
          <a target="blank" href="https://github.com/JaweriaMustafa-github/Hackathon-Projects.git" className="text-cyan-500 mt-2 block hover:text-pink-500">View Github Repo</a>
          <button
         className="bg-cyan-500 text-white rounded-full w-36 hover:bg-pink-500"
         onClick={() =>
         window.open("https://sharable-editable-resume-builder.vercel.app", "_blank")
         }
        >
           Visit Project
        </button>
        </div>
        <div className="border p-5 bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold">Project 3 : Icecreamo Website</h3>
          <Image src="/images/icecreamo.jpg" alt='Cowntdown-timer' width={342} height={342} className="pt-2"></Image>
          <p className="pt-16">An Icecreamo Website by using Next.js and Tailwind CSS.</p>
          <a target="blank" href="https://github.com/JaweriaMustafa-github/icecreamo.git" className="text-cyan-500 mt-2 block hover:text-pink-500">View Github Repo</a>
          <button
         className="bg-cyan-500 text-white rounded-full w-36 hover:bg-pink-500"
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
