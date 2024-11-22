'use client';
import Image from "next/image";
import Link from "next/link";
import TypedText from './TypedText';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-heading">Welcome to My Portfolio</h1>
      {/* Hero Image */}
      <div className="hero-image-container">
        <Image
          src="/images/dp1 (1).png"
          alt="Hero Image"
          width="350"
          height="350"
          className="hero-image"
        />
      </div>
      <h1 className="hero-subheading">Hello I&apos;m</h1>
      <span className="hero-typed-text">
        <TypedText
          strings={[
            'Jaweria Mustafa',
            'UI/UX Designer',
            'Frontend Web Developer',
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </span>
      <p className="hero-description">
        A passionate web developer with skills in Next.js, Tailwind CSS, and more.
      </p>
      <a href="/Jaweria Resume_CV.pdf" download>
        <button className="hero-download-button">Download My CV</button>
      </a>
      <Link href="#contact">
        <button className="hero-hire-button">Hire Me</button>
      </Link>
    </section>
  );
};

export default Hero;