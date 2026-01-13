import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceSummary from "@/components/ExperienceSummary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AdditionalInfo from "@/components/AdditionalInfo";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedGrid from "@/components/AnimatedGrid";
import DotNavigation from "@/components/DotNavigation";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import CursorTrail from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <AnimatedGrid />
      <CursorTrail />
      <ScrollProgress />
      <DotNavigation />
      <Hero />
      <About />
      <Skills />
      <ExperienceSummary />
      <Experience />
      <Projects />
      <AdditionalInfo />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
