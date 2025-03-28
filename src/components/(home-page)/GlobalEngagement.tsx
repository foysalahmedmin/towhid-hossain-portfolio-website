import globalPresence from "@/assets/data/globalPresence";
import { useIntersectionObserver } from "@/hooks/ui/useIntersectionObserver";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, CheckCircle, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../partials/Sections/HeroSection";

const impactMetrics = [
  {
    number: "15+",
    label: "Countries",
    description: "Active business presence",
  },
  {
    number: "20+",
    label: "Partnerships",
    description: "Global strategic alliances",
  },
  {
    number: "1k+",
    label: "People Reached",
    description: "Through global initiatives",
  },
  {
    number: "50+",
    label: "Global Events",
    description: "Annual speaking engagements",
  },
];

const upcomingEvents = [
  {
    title: "Global Leadership Summit",
    date: "April 15-17, 2024",
    location: "London, UK",
    type: "Keynote Speaker",
    audience: "500+ Global Leaders",
    topics: [
      "Digital Transformation",
      "Future of Leadership",
      "Global Innovation",
    ],
  },
  {
    title: "Asia Pacific Business Forum",
    date: "May 10-12, 2024",
    location: "Singapore",
    type: "Panel Moderator",
    audience: "300+ Business Leaders",
    topics: ["Market Expansion", "Regional Collaboration", "Innovation"],
  },
  {
    title: "Tech Innovation Conference",
    date: "June 5-7, 2024",
    location: "San Francisco, USA",
    type: "Featured Speaker",
    audience: "1000+ Industry Leaders",
    topics: ["AI in Business", "Digital Strategy", "Future Tech"],
  },
];

const globalInitiatives = [
  {
    title: "BPO Excellence & Job Creation",
    description: "Leading digital innovation across global markets",
    achievements: [
      "Expanding BPO services across global markets",
      "Creating thousands of jobs in multiple sectors",
      "Providing training to build skilled workforces",
    ],
  },
  {
    title: "Sustainable Business Practices",
    description: "Promoting sustainable practices worldwide",
    achievements: [
      "Replacing plastic with eco-friendly jute goods",
      "Launching green projects in 10+ global regions",
      "Cutting carbon emissions by 30% worldwide",
    ],
  },
  {
    title: "Empowering Communities",
    description: "Building next-generation global leaders",
    achievements: [
      "Training 500+ women and minority workers",
      "Building leaders through global mentorships",
      "Achieving 90% success in growth programs",
    ],
  },
];

const GlobalEngagement = ({ className, isActive }: SectionComponentProps) => {
  const { setRef: setMetricsRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setRegionRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setInitiativeRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setEventRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  return (
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <HeroSection
        isActive={isActive}
        image="/images/global-engagement-banner.png"
        title="Global Engagement"
        description="Driving innovation, fostering collaboration, and creating lasting impact across international markets through strategic leadership and sustainable practices."
      />

      {/* Impact Metrics */}
      <div className="bg-muted/25 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                ref={setMetricsRef(index)}
                className="transform rounded-xl bg-card p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h3 className="mb-2 text-4xl font-bold text-primary">
                  {metric.number}
                </h3>
                <div className="mb-2 font-semibold">{metric.label}</div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Global Presence
          </h2>
          <div className="space-y-20">
            {globalPresence?.map((region, index) => (
              <Link
                key={index}
                ref={setRegionRef(index)}
                to={"/global-presence" + "/" + region?.id}
                target="_blank"
                className="relative block scale-90 cursor-pointer transition-all duration-300"
              >
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <div className="relative h-[300px]">
                    <img
                      src={region.image}
                      alt={region.region}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="mb-4 text-3xl font-bold">
                        {region.region}
                      </h3>
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.partnerships}
                          </div>
                          <div className="text-sm opacity-80">Partnerships</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.reach}
                          </div>
                          <div className="text-sm opacity-80">
                            People Reached
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {region.metrics.events}
                          </div>
                          <div className="text-sm opacity-80">
                            Annual Events
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card p-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-semibold">Key Initiatives</h4>
                        <ul className="space-y-3">
                          {region.initiatives.map((initiative, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-4 font-semibold">Key Markets</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {region.keyMarkets.map((market, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-2 text-muted-foreground"
                            >
                              <MapPin className="h-5 w-5 shrink-0 text-primary" />
                              <span>{market}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Global Initiatives */}
      <div className="bg-muted/25 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Global Impact & Sustainable Growth
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {globalInitiatives.map((initiative, index) => (
              <div
                key={index}
                ref={setInitiativeRef(index)}
                className="rounded-xl bg-card p-8 shadow-lg"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  {initiative.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {initiative.description}
                </p>
                <div className="space-y-3">
                  {initiative.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Global Events */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Upcoming Global Events
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                ref={setEventRef(index)}
                className="rounded-xl bg-muted/25 p-8 shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="rounded-lg bg-primary/5 p-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{event.audience}</span>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold">Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/5 px-3 py-1 text-sm text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-primary/75 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Go Global?</h2>
          <p className="mb-8 text-xl opacity-90">
            Connect with us to explore international business opportunities and
            strategic partnerships
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-card px-8 py-3 font-semibold text-primary transition-colors hover:bg-opacity-90"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalEngagement;
