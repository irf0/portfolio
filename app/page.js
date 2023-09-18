import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <section
        id="section1"
        className="border-b dark:border-gray-700 border-gray-300 p-20"
      >
        <Hero />
      </section>
      <section id="section2">
        <About />
      </section>

      <section id="section3">
        <Skills />
      </section>
      <section id="section4">
        <Projects />
      </section>
      <section id="section5">
        <Contact />
      </section>
    </div>
  );
}
