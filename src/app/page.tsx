import Navbar from '@/components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import MyLinks from '../components/MyLinks';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <MyLinks />
      <Contact />
      <Footer />
      </div>
  );
};

export default Home;