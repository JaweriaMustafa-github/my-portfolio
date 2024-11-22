import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-pink-600 text-center">
      <div className="flex justify-center">
        <button className="bg-white rounded-full px-4 py-2 w-11/12 sm:w-2/3 lg:w-1/3">
          <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-lg font-bold">
            <Link href="#" className="hover:text-cyan-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-cyan-500">
              About
            </Link>
            <Link href="#skills" className="hover:text-cyan-500">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-cyan-500">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-cyan-500">
              Contact
            </Link>
          </div>
        </button>
      </div>
      <p className="mt-5 text-sm sm:text-base text-cyan-500">
        © All rights are reserved 2024. Jaweria Mustafa
      </p>
    </footer>
  );
};

export default Footer;