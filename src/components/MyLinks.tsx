import Image from "next/image";
import './MyLinks.css';

const MyLinks = () => {
  return (
    <section id="links" className="my-links-section">
      <h2 className="my-links-heading">My Links</h2>
      <div className="my-links-image-container">
        <Image 
          src="/images/About me.webp" 
          alt="my-links" 
          height="350" 
          width="350" 
          className="my-links-main-image"
        />
      </div>
      <div className="my-links-list">
        <a 
          target="_blank" 
          href="https://github.com/JaweriaMustafa-github" 
          className="my-links-item"
        >
          <Image 
            src="/icons/icons8-github-logo-94.png" 
            alt="GitHub" 
            width={60} 
            height={60} 
            className="my-links-icon"
          />
          <p>My Github</p>
        </a>
        <a 
          target="_blank" 
          href="https://www.linkedin.com/in/jaweria-mustafa-a727b22b5" 
          className="my-links-item"
        >
          <Image 
            src="/icons/icons8-linkedin-logo-94.png" 
            alt="LinkedIn" 
            width={60} 
            height={60} 
            className="my-links-icon"
          />
          <p>My LinkedIn</p>
        </a>
        <a 
          target="_blank" 
          href="mailto:jaweriamustafa01nov@gmail.com" 
          className="my-links-item"
        >
          <Image 
            src="/icons/icons8-gmail-48.png" 
            alt="Gmail" 
            width={60} 
            height={60} 
            className="my-links-icon"
          />
          <p>My Gmail</p>
        </a>
      </div>
    </section>
  );
};

export default MyLinks;