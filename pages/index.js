import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Favicon from "../components/Favicon";
import SkillSection from "../components/SkillSection";
import ProfessionalSkills from "../components/ProfessionalSkills";
import CurrentlyLearning from "../components/CurrentlyLearning";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="py-6 px-10 w-4/5 mt-10 mb-10">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>A Awal Hadi</title>
        <meta
          name="description"
          content="
        <Favicon />I love building applications that solve real-world problems and contribute to the open-source community. Constantly seeking new challenges to learn and grow as a developer."
        />

        {/* Social Media Meta Tags */}
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/seo-img.webp" />
        <meta property="og:image:alt" content="Portfolio of A Awal Hadi" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        {/* Add more Twitter meta tags as needed */}

        {/* LinkedIn */}
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="A Awal" />
        <meta property="og:profile:last_name" content="Hadi" />
        <meta property="og:profile:username" content="a-awal-hadi" />
        {/* Add more LinkedIn meta tags as needed */}

        {/* Facebook */}
        <meta property="fb:profile_id" content="a.awal.hadi" />
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

      <SpeedInsights />
    </div>
  );
}
