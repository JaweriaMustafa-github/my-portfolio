import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-10">About Me</h2>
      <Image src="/images/About.webp" alt="Profile Picture" width="350" height="350" className=" rounded-full mb-5 transition-shadow duration-300 hover:scale-105" />
      <p className="max-w-3xl text-2xl font-semibold text-center">
        Hello, I&apos;m a passionate web developer with a love for creating interactive and dynamic user experiences. I specialize in building responsive websites and applications using modern technologies like HTML, CSS,Typescript, Next.js, and Tailwind CSS.
      </p>
    </section>
  );
};

export default About;
