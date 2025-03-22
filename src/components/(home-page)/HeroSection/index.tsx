import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const HeroSection = ({ className }: { className?: string }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateOnScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section
      id="home"
      className={cn(
        "relative flex min-h-screen flex-col justify-center overflow-hidden py-20",
        className,
      )}
    >
      <div className="container-custom relative z-10">
        <div
          ref={heroRef}
          className="page-transition-wrapper mx-auto max-w-4xl animate-fade-in text-center"
        >
          <span className="mb-6 inline-block animate-slide-up text-sm font-medium uppercase tracking-wider text-black/60">
            Product Designer
          </span>
          <h1
            className="title-large mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting digital experiences that people love.
          </h1>
          <p
            className="subtitle mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm a product designer specializing in UI/UX design, creating
            intuitive digital experiences for brands and products.
          </p>
          <div
            className="flex animate-slide-up justify-center space-x-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#work"
              className="button-primary border border-black bg-white hover:bg-black"
            >
              <span>View Work</span>
            </a>
            <a
              href="#contact"
              className="button-primary border border-black bg-black text-white hover:bg-white hover:text-black"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <a
          href="#work"
          className="flex flex-col items-center text-sm text-black/60 transition-colors hover:text-black"
        >
          <span className="mb-2">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50"></div>
    </section>
  );
};

export default HeroSection;
