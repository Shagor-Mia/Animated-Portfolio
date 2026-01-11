import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProgrammingSkills from "./components/otherskills";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <ProgrammingSkills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
