"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useActiveSection from "@/hooks/useActiveSession";
import { useEffect } from "react";

import { Mail } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { FolderOpen } from "lucide-react";
import { Award } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-full h-full" />, href: "#dashboard" },
  { id: "projects", label: "Projects", icon: <FolderOpen className="w-full h-full" />, href: "#projects" },
  { id: "certificates", label: "Certificates", icon: <Award className="w-full h-full"/>, href: "#certificates" },
  { id: "contact", label: "Contact", icon: <Mail className="w-full h-full"/>, href: "#contact" },
];

export default function SideNav({ className = "" }: { className?: string }) {
  const activeSection = useActiveSection("[data-section]");
  
  useEffect(() => {
    console.log(`Active Section: ${activeSection}`);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Get the element's position and add a small offset for better visual alignment
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 20 // 20px offset from top
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }


  return (
    <nav className={`flex flex-col items-stretch gap-3 ${className}`} aria-label="Profile navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-accent text-background'
                : 'hover:bg-[var(--border)] text-secondary'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={`w-4.5 aspect-square relative flex-none
              isActive? 'fill-background' : 'fill-secondary'`}>
              {item.icon}
            </span>
            <span className={`text-sm ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
