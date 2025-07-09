import { ArrowDown } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center" id='hero'>
      <h1 className="text-5xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg mb-8">
        I build modern web experiences.
      </p>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 animate-bounce">
        <button
          type="button"
          onClick={handleScrollDown}
          className="flex flex-col items-center focus:outline-none bg-transparent border-none"
          aria-label="Scroll Down"
        >
          <span>Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </div>
    </section>
  );
}