"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

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