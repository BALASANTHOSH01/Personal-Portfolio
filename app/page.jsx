import { Hero, NavBar, Skills } from "@/components";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ProjectsSection from "@/components/Project/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <div className="w-[100%]">
       <NavBar/>
      </div>
      

      <Hero/>
      <About/>
      <Skills/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </main>
  );
}
