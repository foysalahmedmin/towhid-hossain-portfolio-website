import { useIntersectionObserver } from "@/hooks/ui/useIntersectionObserver";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "1k+", label: "Team Members" },
  { number: "10M+", label: "Revenue Generated" },
];

const About = ({ className }: SectionComponentProps) => {
  const { setRef: setContentRef } = useIntersectionObserver({
    classNames: "animate-slide-right",
    options: { threshold: 0.1 },
  });
  const { setRef: setImageRef } = useIntersectionObserver({
    classNames: "animate-fade-in",
    options: { threshold: 0.1 },
  });

  return (
    <div className={cn("py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={setContentRef(0)} className="order-2 opacity-0 lg:order-1">
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-black/60">
              About Me
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              BPO Innovator Building Bridges for Global Success
            </h2>
            <div className="space-y-4 text-base text-muted-foreground md:text-lg">
              <p>
                I have dedicated more than two decades to the Business Process
                Outsourcing (BPO) industry. My professional journey has been
                deeply rooted in innovation, leadership, and the belief that
                collaboration across borders can create shared success.
                <br /> As I reflect on my career and envision its future
                trajectory, my long-term goal has always been aligned with the
                country that stands as a beacon of opportunity, technological
                advancement, and economic innovation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-2xl font-bold text-primary lg:text-4xl">
                    {stat.number}
                  </h3>
                  <p className="text-xs text-muted-foreground lg:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="button button-outline w-full lg:w-auto"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div ref={setImageRef(0)} className="order-1 opacity-0 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted/50">
                <img
                  src="/images/profile.png"
                  alt="Portrait of Towhid"
                  className="size-full object-cover object-bottom"
                />
              </div>
              <div className="relative mx-6 -mt-20 rounded-lg bg-card p-6 shadow-lg">
                <p className="text-sm font-medium">
                  "Investing in yourself means a continual assessment of
                  self-improvement, and that process weeds out our weaknesses.
                  It's not about perfection, but if we focus on overcoming our
                  inner obstacles to success, we can conquer the world within
                  and then the world outside."
                </p>
                <p className="mt-2 text-sm text-black/60">— Towhid Hossain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
