'use client'
import Image from "next/image";
import Link from "next/link";
import TypedText from './TypedText';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white pt-16">
      <h1 className="text-5xl font-extrabold text-gradient pb-7">Welcome to My Portfolio</h1>
      {/* Hero Image */}
     <div className="w-64 h-64 flex hover:scale-105 duration-300 hover:transition-transform">
          <Image
            src="/images/dp1 (1).png"
            alt="Hero Image"
            width="350"
            height="350"
            className="rounded-full "
          />
        </div>
      <h1 className="text-5xl text- font-bold">Hello I&apos;m</h1>
      <span className="text-5xl md:text-7xl font-bold text-pink-400">
          {/* Typing Animation */}
          <TypedText
            strings={[
              'Jaweria Mustafa',
              'UI/UX Designer',
              'Frontend Web Developer'
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
          </span>
      <p className="text-xl mt-4">A passionate web developer with skills in Next.js, Tailwind CSS and more.</p>
      <a href="/Jaweria Resume_CV.pdf" download>
        <button className="mt-10 px-6 py-2 shadow- border-2 border-pink-500 hover:bg-pink-500 text-white hover:text-black rounded-full hover:scale-105 transition-transform duration-300">
          Download My CV
        </button>
      </a>
      <Link href="#contact" className="hover:text-pink-400">
      <button className="mt-10 border-2 border-cyan-500 px-6 py-3 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-transform duration-300 text-white rounded-full">
       Hire Me
      </button>
      </Link>
      <br />
     
    </section>
    
  );
};

export default Hero;
