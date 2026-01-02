import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import ProfilePanel from "@/components/profile-panel/ProfilePanel";
import { Toaster } from 'sonner';
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "DevDotCed | Ken Cedrick Jimeno",
    template: "%s | DevDotCed"
  },
  description: "Portfolio of Ken Cedrick A. Jimeno - Full Stack Developer & CS Student. Explore my projects, skills, and journey in web development.",
  keywords: ["Ken Cedrick Jimeno", "DevDotCed", "Web Developer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "Freelance", "Freelancer"],
  authors: [{ name: "Ken Cedrick A. Jimeno" }],
  creator: "Ken Cedrick A. Jimeno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devdotced-v2.vercel.app",
    title: "DevDotCed | Ken Cedrick Jimeno",
    description: "Portfolio of Ken Cedrick A. Jimeno - Full Stack Developer & CS Student. Explore my projects, skills, and journey in web development.",
    siteName: "DevDotCed",
    images: [
      {
        url: "/devdotced_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "DevDotCed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDotCed | Ken Cedrick Jimeno",
    description: "Portfolio of Ken Cedrick A. Jimeno - Full Stack Developer & CS Student. Explore my projects, skills, and journey in web development.",
    images: ["/devdotced_logo.jpeg"],
  },
  icons: {
    icon: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`antialiased transition-colors duration-300`}> 
        <ThemeProvider>
          <Toaster richColors={true} position='top-right' />
          <ProfilePanel />
          <main className="lg:ml-72 min-h-screen overflow-auto bg-background text-primary transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
