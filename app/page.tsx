import Dashboard from "@/components/dashboard/Dashboard";
import Project from "@/components/projects/Project";
import Certificates from "@/components/certificates/Certificates";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="font-geneva flex flex-col items-center justify-items-center min-h-screen w-full">
      <Dashboard />

      <Project />

      <Certificates />

      <Contact />
    </div>
  );
}
