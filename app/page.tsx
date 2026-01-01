import Dashboard from "@/components/dashboard/Dashboard";
import Skills from "@/components/skills";
import Project from "@/components/projects/Project";
import Certificates from "@/components/certificates/Certificates";
import Contact from "@/components/contact/Contact";
import MobileProfilePanel from "@/components/mobile-profile/MobileProfilePanel";

export default function Home() {
  return (
    <div className="font-geneva flex flex-col items-center justify-items-center min-h-screen w-full">
      {/* PROFILE PANEL FOR MOBILE */}
      <MobileProfilePanel />

      {/* GITHUB DATA */}
      <Dashboard />

      {/* SKILLS & TOOLS */}
      <Skills />

      {/* LIST OF PROJECTS */}
      <Project />

      {/* LIST OF CERTIFICATES */}
      <Certificates />

      <Contact />
    </div>
  );
}
