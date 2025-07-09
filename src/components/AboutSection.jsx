import { ArrowDown } from "lucide-react"
import React from "react";

export const AboutSection = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("Skills");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-foreground relative" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="relative z-10">
            <span className="text-glow text-foreground">About </span>Me
          </span>
        </h2>
        <p className="text-lg mb-6">
          I am a passionate web developer with a focus on creating dynamic and responsive web applications. My journey in web development has been fueled by a love for coding and a desire to build impactful digital experiences.
        </p>
        <p className="text-lg">
          With expertise in modern web technologies, I strive to deliver high-quality code and user-friendly interfaces. Let's connect and create something amazing together!
        </p>
        <br />
        <br />
      </div>

      
    </section>
  );
}