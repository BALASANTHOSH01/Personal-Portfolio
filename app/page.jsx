import { Hero, NavBar, Skills } from "@/components";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ProjectsSection from "@/components/Project/ProjectsSection";
import Switch from "@/components/ThemeSwitch/ThemeButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between z-50">
      <div className="w-[100%]">
        <NavBar />
      </div>
      <div className=" fixed bottom-10 right-5 md:bottom-0 md:top-10">
        <Switch />
      </div>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
      <Footer />
    </main>
  );
}
