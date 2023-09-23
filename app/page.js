import dynamic from "next/dynamic";
const About = dynamic(() => import("./_components/About"));
const Contact = dynamic(() => import("./_components/Contact"));
const Hero = dynamic(() => import("./_components/Hero"));
const Projects = dynamic(() => import("./_components/Projects"));
const Services = dynamic(() => import("./_components/Services"));
const Skills = dynamic(() => import("./_components/Skills"));
import "./globals.css";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
