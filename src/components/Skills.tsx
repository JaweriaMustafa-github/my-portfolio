import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-5">
        {/* Skill 1: Next.js */}
        <div className="text-center">
          <Image
            src="/icons/nextjs-icon.png" // Path to the Next.js icon
            alt="Next.js"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">Next.js</h3>
        </div>
        
        {/* Skill 2: Tailwind CSS */}
        <div className="text-center">
          <Image
            src="/icons/icons8-tailwindcss-48.png" // Path to the Tailwind CSS icon
            alt="Tailwind CSS"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>

        {/* Skill 3: HTML5 */}
        <div className="text-center">
          <Image
            src="/icons/icons8-html-5-48.png" // Path to the HTML5 icon
            alt="HTML5"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>

        {/* Skill 4: CSS3 */}
        <div className="text-center">
          <Image
            src="/icons/icons8-css3-48.png" // Path to the CSS3 icon
            alt="CSS3"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">CSS3</h3>
        </div>

        {/* Skill 5: TypeScript */}
        <div className="text-center">
          <Image
            src="/icons/icons8-typescript-48.png" // Path to the TypeScript icon
            alt="TypeScript"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">TypeScript</h3>
        </div>

        {/* Skill 6: GitHub */}
        <div className="text-center">
          <Image
            src="/icons/icons8-github-logo-94.png" // Path to the GitHub icon
            alt="GitHub"
            width={60}
            height={60}
            className="mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold">GitHub</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
