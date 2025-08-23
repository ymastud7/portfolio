"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Leadership from "@/components/sections/Leadership";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Leadership />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-12 text-center text-foreground/60 border-t border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-base">© {new Date().getFullYear()} Yash Mastud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}