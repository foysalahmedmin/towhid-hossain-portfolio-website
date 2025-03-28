import { useIntersectionObserver } from "@/hooks/ui/useIntersectionObserver";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart,
  Briefcase,
  CheckCircle,
  Leaf,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../partials/Sections/HeroSection";

const keyMetrics = [
  {
    number: "10%",
    label: "Revenue Growth",
    description: "Year-over-year growth through digital transformation",
  },
  {
    number: "20%",
    label: "Cost Reduction",
    description: "Operational cost savings through innovation",
  },
  {
    number: "$10M+",
    label: "Portfolio Value",
    description: "Strategic partnerships managed",
  },
  {
    number: "50+",
    label: "National and Global Markets",
    description: "Successfully penetrated markets",
  },
];

const achievements = [
  {
    icon: <Trophy className="h-12 w-12 text-primary" />,
    title: "Business Growth",
    description:
      "Expanded BPO operations, creating 8,000+ jobs and increasing service capacity by 200%.",
    metrics: [
      "$10M+ in outsourcing contracts secured",
      "20% market expansion across multiple regions",
      "60% increase in client acquisitions",
    ],
  },
  {
    icon: <BarChart className="h-12 w-12 text-green-600" />,
    title: "Operational Excellence",
    description:
      "Enhanced workforce efficiency through training and process optimization, reducing costs by 20%.",
    metrics: [
      "$1M+ in annual savings through streamlined operations",
      "30% improvement in process efficiency",
      "30% reduction through sustainable alternatives",
    ],
  },
  {
    icon: <Users className="h-12 w-12 text-purple-600" />,
    title: "Industry Leadership",
    description:
      "Managed large-scale partnerships, fostering sustainable growth in IT/ITES and BPO sectors.",
    metrics: [
      "$1M+ in strategic partnerships with global enterprises",
      "50% client retention rate through service excellence",
      "20k+ professionals trained under industry development programs",
    ],
  },
];

const strategies = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Market Expansion",
    description:
      "Expanded BPO operations across 50+ markets, creating new job opportunities.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Workforce Empowerment",
    description:
      "Trained and upskilled thousands, focusing on women and minority communities.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    title: "Operational Excellence",
    description:
      "Built high-performing teams to enhance efficiency and service quality.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-teal-600" />,
    title: "Sustainability Initiatives",
    description:
      "Reduced carbon footprint by promoting jute products as a polymer alternative.",
  },
];

const successStories = [
  {
    company: "FIFOTech",
    industry: "IT & Technology",
    achievement: "100% growth in 5 years",
    impact: "Transformed digital infrastructure and expanded market presence",
    image: "/images/story-fifo-tech.jpg",
  },
  {
    company: "Golden Fiber Asia",
    industry: "Sustainable Manufacturing ",
    achievement: "30% cost reduction",
    impact:
      "Sustainable by reducing carbon footprints through eco-friendly products",
    image: "/images/story-golden-fiber.jpg",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Record-Breaking Growth",
    description:
      "Achieved the highest revenue growth in company history, solidifying market leadership.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Successfully entered 10 new international markets, extending our global reach.",
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description:
      "Launched significant digital infrastructure upgrades, driving operational efficiency.",
  },
  {
    year: "2021",
    title: "Job Creation",
    description:
      "Created over 8,000 new jobs, supporting economic growth through BPO operations.",
  },
  {
    year: "2020",
    title: "Sustainability Milestone",
    description:
      "Introduced eco-friendly jute-based products, reducing carbon footprint and promoting sustainable manufacturing.",
  },
];

const CommercialSuccess = ({ className, isActive }: SectionComponentProps) => {
  const { setRef: setMetricsRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setAchievementRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setStrategyRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setStoryRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setMilestoneRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });

  return (
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <HeroSection
        isActive={isActive}
        image="/images/commercial-growth-banner.png"
        title="Commercial Success"
        description="Achieving sustainable growth through strategic innovation, operational excellence, and visionary leadership across national and global markets."
      />

      {/* Key Metrics */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              ref={setMetricsRef(index)}
              className="rounded-xl bg-muted/25 p-6 text-center shadow-lg"
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

      {/* Main Achievements */}
      <div className="container mx-auto mb-20 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Key Achievements
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              ref={setAchievementRef(index)}
              className="rounded-xl bg-muted/25 p-8 shadow-lg"
            >
              <div className="mb-6 flex justify-center">{achievement.icon}</div>
              <h3 className="mb-4 text-center text-xl font-semibold">
                {achievement.title}
              </h3>
              <p className="mb-6 text-center text-muted-foreground">
                {achievement.description}
              </p>
              <ul className="space-y-3">
                {achievement.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Approach */}
      <div className="mb-20 bg-muted/25 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Strategic Approach
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                ref={setStrategyRef(index)}
                className="rounded-xl bg-card p-6 shadow-lg"
              >
                <div className="mb-4">{strategy.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto mb-20 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {successStories?.map((story, index) => (
            <div
              key={index}
              ref={setStoryRef(index)}
              className="overflow-hidden rounded-xl bg-card shadow-lg"
            >
              <img
                src={story.image}
                alt={story.company}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">
                      {story.company}
                    </h3>
                    <p className="text-muted-foreground">{story.industry}</p>
                  </div>
                  <span className="rounded-e-full bg-primary/5 px-3 py-1 text-sm text-primary md:rounded-full">
                    {story.achievement}
                  </span>
                </div>
                <p className="text-muted-foreground">{story.impact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="#leading-role" className="button bg-transparent shadow-md">
            <span>More Stories</span>
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-muted/25 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Key Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={setMilestoneRef(index)}
                className="flex flex-col items-start gap-4 md:flex-row md:gap-6"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-xl font-bold text-primary">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow rounded-xl bg-card p-6 shadow-lg">
                  <h3 className="mb-2 text-lg font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialSuccess;
