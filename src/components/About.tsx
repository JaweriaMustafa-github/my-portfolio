import Image from "next/image";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <Image
        src="/images/About.webp"
        alt="Profile Picture"
        width="350"
        height="350"
        className="about-image"
      />
      <p className="about-description">
        Hello, I&apos;m a passionate web developer with a love for creating interactive and dynamic user experiences. I specialize in building responsive websites and applications using modern technologies like HTML, CSS, TypeScript, Next.js, and Tailwind CSS.
      </p>
    </section>
  );
};

export default About;