import type { Metadata } from "next";
import "./globals.css";
import ProfilePanel from "@/components/profile-panel/ProfilePanel";

export const metadata: Metadata = {
  title: "DevDotCed - v2",
  description: "A portfolio to showcase skills of Ken Cedrick A. Jimeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}> 
        <ProfilePanel />
        <main className="ml-[20vw] min-h-screen overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
