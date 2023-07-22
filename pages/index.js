import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Element } from "react-scroll";
import Favicon from "../components/Favicon";
import Header from "../components/Header";
import SkillSection from "../components/SkillSection";
import ProfessionalSkills from "../components/ProfessionalSkills";
import CurrentlyLearning from "../components/CurrentlyLearning";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";

export default function Home() {
  return (
    <div className="py-6 px-10 w-4/5 mt-10 mb-10">
      <Head>
        <title>A Awal Hadi</title>
        <meta name="description" content="Generated by A Awal Hadi" />
        <Favicon />
      </Head>
      <Hero />

      {/* detailed info */}
      <main className="flex flex-col md:flex-row gap-x-10 mt-10">
        {/* contact details */}
        <div className="w-full md:w-1/3">
          <Contact />

          {/* professional skills */}
          <ProfessionalSkills />
          {/* <Skills /> */}
          <SkillSection />
          
          
          <CurrentlyLearning />
        </div>

        {/* info */}
        <div className="w-full md:w-2/3">
          <About />

          {/* <!-- work experiences --> */}
          <ExperienceSection />

          {/* <!-- projects --> */}
          <ProjectSection />

          <EducationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
