import Image from "next/image";

const MyLinks = () => {
  return (
    <section id="links" className="py-20 bg-black text-white">
      <h2 className="text-4xl text-center mb-10 font-bold">My Links</h2>
      <div className="justify-items-center">
      <Image src="/images/About me.webp" alt="my-links" height="350" width="350" className="rounded-full mb-5 transition-shadow duration-300 hover:scale-105"></Image>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <a
          target="_blank"
          href="https://github.com/JaweriaMustafa-github"
          className="text-white"
        >
          <Image
            src="/icons/icons8-github-logo-94.png"
            alt="GitHub"
            width={60}
            height={60}
            className="transform hover:scale-110 transition-transform duration-300"
          />
          <p>My Github</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jaweria-mustafa-a727b22b5"
          className="text-white"
        >
          <Image
            src="/icons/icons8-linkedin-logo-94.png"
            alt="LinkedIn"
            width={60}
            height={60}
            className="transform hover:scale-110 transition-transform duration-300"
          />
          <p>My Linkedin</p>
        </a>
        <a
          target="_blank"
          href="mailto:jaweriamustafa01nov@gmail.com"
          className="text-white"
        >
          <Image
            src="/icons/icons8-gmail-48.png"
            alt="Gmail"
            width={60}
            height={60}
            className="transform hover:scale-110 transition-transform duration-300"
          />
          <p>My Gmail</p>
        </a>
      </div>
    </section>
  );
};

export default MyLinks;