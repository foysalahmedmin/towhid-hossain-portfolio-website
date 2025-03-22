import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Finance Dashboard",
    category: "UX/UI Design",
    description:
      "A comprehensive finance dashboard designed for tracking investments and managing portfolios.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/work/finance-dashboard",
  },
  {
    id: "project-2",
    title: "Wellness App",
    category: "Mobile Design",
    description:
      "A wellness application focusing on meditation, fitness tracking, and mental health.",
    imageUrl:
      "https://images.unsplash.com/photo-1594767357066-074e245fd209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    link: "/work/wellness-app",
  },
  {
    id: "project-3",
    title: "E-commerce Redesign",
    category: "Web Design",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    imageUrl:
      "https://images.unsplash.com/photo-1517429080400-1e1d71c4154a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    link: "/work/ecommerce-redesign",
  },
  {
    id: "project-4",
    title: "Travel Booking Platform",
    category: "UX/UI Design",
    description:
      "A travel booking platform designed to simplify the process of finding and booking experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1517437612223-e7e22c4cb2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    link: "/work/travel-booking",
  },
];

const WorkSection = ({ className }: { className?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={cn("relative overflow-hidden py-24", className)}
    >
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-black/60">
            Portfolio
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Selected Work
          </h2>
          <p className="subtitle mx-auto">
            Explore my recent projects showcasing my expertise in UI/UX design,
            web development, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="work-card group opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <Link to={project.link} className="block">
                <div className="work-card-image">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm uppercase tracking-wider text-black/60">
                    {project.category}
                  </span>
                  <h3 className="mb-3 mt-2 text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="button-primary border border-black bg-white hover:bg-black"
          >
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
