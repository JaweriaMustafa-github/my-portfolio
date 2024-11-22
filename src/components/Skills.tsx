import Image from "next/image";
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {/* Skill 1: Next.js */}
        <div className="skill-card">
          <Image
            src="/icons/nextjs-icon.png"
            alt="Next.js"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">Next.js</h3>
        </div>

        {/* Skill 2: Tailwind CSS */}
        <div className="skill-card">
          <Image
            src="/icons/icons8-tailwindcss-48.png"
            alt="Tailwind CSS"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">Tailwind CSS</h3>
        </div>

        {/* Skill 3: HTML5 */}
        <div className="skill-card">
          <Image
            src="/icons/icons8-html-5-48.png"
            alt="HTML5"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">HTML5</h3>
        </div>

        {/* Skill 4: CSS3 */}
        <div className="skill-card">
          <Image
            src="/icons/icons8-css3-48.png"
            alt="CSS3"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">CSS3</h3>
        </div>

        {/* Skill 5: TypeScript */}
        <div className="skill-card">
          <Image
            src="/icons/icons8-typescript-48.png"
            alt="TypeScript"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">TypeScript</h3>
        </div>

        {/* Skill 6: GitHub */}
        <div className="skill-card">
          <Image
            src="/icons/icons8-github-logo-94.png"
            alt="GitHub"
            width={60}
            height={60}
            className="skill-icon"
          />
          <h3 className="skill-name">GitHub</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;