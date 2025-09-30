import Dashboard from "@/components/dashboard/Dashboard";
import Project from "@/components/projects/Project";
import Certificates from "@/components/certificates/Certificates";

export default function Home() {
  return (
    <div className="font-geneva flex flex-col items-center justify-items-center min-h-screen w-full">
      <Dashboard />

      <Project />

      <Certificates />

      <section id="contact" className="h-screen bg-red-100 flex items-center justify-center w-full" data-section="contact">
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  );
}
