import Image from "next/image";

export default function Home() {
  return (
    <div className="font-geneva flex flex-col items-center justify-items-center min-h-screen w-full gap-16">
      <section id="dashboard" className="h-screen bg-blue-100 flex items-center justify-center w-full border" data-section="dashboard">
        <h1 className="text-4xl">Dashboard Section</h1>
      </section>

      <section id="projects" className="h-screen bg-green-100 flex items-center justify-center w-full" data-section="projects">
        <h1 className="text-4xl">Projects Section</h1>
      </section>

      <section id="certificates" className="h-screen bg-yellow-100 flex items-center justify-center w-full" data-section="certificates">
        <h1 className="text-4xl">Certificates Section</h1>
      </section>

      <section id="contact" className="h-screen bg-red-100 flex items-center justify-center w-full" data-section="contact">
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  );
}
