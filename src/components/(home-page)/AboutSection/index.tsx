import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const AboutSection = ({ className }: { className?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add("animate-slide-right");
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-fade-in");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={cn("bg-gray-50 py-24", className)}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={contentRef} className="order-2 opacity-0 lg:order-1">
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-black/60">
              About Me
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Designer, Problem Solver, Creative Thinker
            </h2>
            <div className="space-y-4 text-base text-muted-foreground md:text-lg">
              <p>
                I'm a product designer with over 7 years of experience creating
                digital experiences for a variety of clients, from startups to
                enterprise companies.
              </p>
              <p>
                My approach combines user-centered design principles with a keen
                eye for aesthetics to create products that are both functional
                and beautiful. I believe that great design is not just about how
                things look, but how they work.
              </p>
              <p>
                When I'm not designing, you can find me exploring new hiking
                trails, experimenting with photography, or diving into the
                latest design books and articles.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-2 text-4xl font-bold">7+</h3>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold">30+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="button-primary border border-black bg-white hover:bg-black"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="order-1 opacity-0 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80"
                  alt="Portrait of Picklu"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-lg bg-white p-6 shadow-lg">
                <p className="text-sm font-medium">
                  "Design is not just what it looks like and feels like. Design
                  is how it works."
                </p>
                <p className="mt-2 text-sm text-black/60">— Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
