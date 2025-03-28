import { useIntersectionObserver } from "@/hooks/ui/useIntersectionObserver";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Globe,
  Lightbulb,
  Medal,
  ShieldCheck,
  Target,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import HeroSection from "../partials/Sections/HeroSection";

const majorAwards = [
  {
    icon: <Trophy className="h-12 w-12 text-purple-500" />,
    title: "Award for the Best Outstanding Tech Company",
    organization: "ASOCIO Summit Awards",
    year: "2022",
    description:
      "Recognized for significant contributions to the IT sector in Bangladesh",
    impact: [
      "Honored for excellence in the ICT sector",
      "Recognized for contributions to technology innovation",
      "Celebrated for leadership in the global tech industry",
    ],
    link: "https://www.prothomalo.com/technology/yxzzvo3okh",
  },
  {
    icon: <Award className="h-12 w-12 text-yellow-500" />,
    title: "National Award for the Best IT Company",
    organization: "National Award of Digital Bangladesh",
    year: "2020",
    description:
      "Recognized for exceptional contributions to digital transformation",
    impact: [
      "Excellence in technological advancements",
      "Impact in public services, education, and economics",
      "Advancing the vision of Digital Bangladesh",
    ],
    link: "https://www.bbarta24.net/science-and-technology/135718",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "National Award of Post & Telecommunication",
    organization: "National Awards of Digital Bangladesh Fair",
    year: "2023",
    description:
      "Recognized for outstanding contributions to the Telecoms sector",
    impact: [
      "Honored for innovation and excellence in the BPO sector",
      `Significant contributions to building a "Digital Bangladesh"`,
      "Recognized for excellence in contact center development",
    ],
    link: "https://www.jagonews24.com/technology/news/829175",
  },
  {
    icon: <Medal className="h-12 w-12 text-teal-600" />,
    title: "Award for BPO Industry Contribution",
    organization: "BPO Industry Recognition",
    year: "2023",
    description:
      "Recognized for significant contributions to the BPO sector in Bangladesh",
    impact: [
      "Honored for excellence and innovation in the BPO industry",
      "Recognized for fostering the growth and development of the BPO sector",
      "Celebrated for driving advancements in business process outsourcing",
    ],
  },
  {
    icon: <Globe className="h-12 w-12 text-purple-500" />,
    title: "NFCON Awards 2023",
    organization: "NFCON",
    year: "2023",
    description:
      "Recognized for significant contributions to Asia's largest freelancer conference",
    impact: [
      "Honored for promoting freelancing and financial inclusion",
      "Honored for participation as a panel speaker",
      "Celebrated for sharing insights on the future of freelancing",
    ],
    link: "https://www.tbsnews.net/economy/corporates/freelancers-briefed-bringing-their-income-through-bkash-nfcon-2023-693902?utm_source=chatgpt.com",
  },
  {
    icon: <Users className="h-12 w-12 text-yellow-500" />,
    title: "Awards for the Youth to Drive",
    organization: "Bangladeshi Youth to Drive the BPO Industry",
    year: "2023",
    description:
      "Honored for inspiring youth to seize opportunities and excel in the BPO industry",
    impact: [
      "Honored for inspiring youth in the BPO industry",
      "Recognized for promoting innovation and consistency",
      "Celebrated for empowering young minds to excel globally",
    ],
    link: "",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-yellow-500" />,
    title: "Awards for the Best Trainee",
    organization: "Skills for Employment Investment Program (SEIP)",
    year: "2023",
    description:
      "Recognized for exceptional performance and contributions to the BPO sector",
    impact: [
      "Honored for outstanding achievement in BPO training",
      "Recognized for dedication to skill enhancement",
      "Celebrated for advancing the BPO industry in Bangladesh",
    ],
    link: "",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
    title: "Award for Smart Bangladesh",
    organization: "FBCCI Smart Bangladesh Awards",
    year: "2023",
    description:
      "Honored for pioneering contributions to Bangladesh’s digital transformation",
    impact: [
      "Recognized for leadership in promoting smart solutions",
      "Celebrated for advancing Bangladesh’s digital landscape",
      "Acknowledged for driving innovation for a Smart Bangladesh",
    ],
    link: "",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-green-500" />,
    title: "Special Guest Award",
    organization: "Kaspersky Cyber Security Challenge",
    year: "2023",
    description:
      "Recognized for outstanding contributions to cybersecurity awareness",
    impact: [
      "Honored for leadership in advocating digital safety",
      "Recognized for strengthening cybersecurity measures",
      "Celebrated for promoting a safer online environment",
    ],
    link: "",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-yellow-500" />,
    title: "BPO Summit Award",
    organization: "BPO Summit Bangladesh",
    year: "2018",
    description:
      "Recognized for exceptional leadership and contributions to BPO inclusivity",
    impact: [
      "Honored for promoting career opportunities for youth and women",
      "Recognized for leadership in driving BPO sector growth",
      "Celebrated for inspiring diverse talents to pursue careers in BPO",
    ],
    link: "",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-yellow-500" />,
    title: "Certificate of Recognition",
    organization: "Little Bangladesh Community Recognition",
    year: "2023",
    description:
      "Honored for significant contributions to arts, culture, and cuisine",
    impact: [
      "Recognized for enriching the cultural landscape of Los Angeles",
      "Celebrated for fostering cultural heritage and diversity",
      "Acknowledged for positive impact on the Little Bangladesh community",
    ],
    link: "",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-pink-500" />,
    title: "Award for International Women Empower",
    organization: "International Women Entrepreneurs Summit",
    year: "2022",
    description: "Recognized for empowering women entrepreneurs worldwide",
    impact: [
      "Honored for championing women’s leadership in business",
      "Celebrated for fostering global opportunities for female entrepreneurs",
      "Appreciated for promoting gender equality in entrepreneurship",
    ],
    link: "",
  },
];

const speakingEngagements = [
  {
    event: "Digital Innovation Challenge for Women 2023",
    location: "Bangladesh",
    date: "2023",
    topic: "Empowering female innovators in technology",
    audience: "Judging digital innovation projects",
  },
  {
    event: '“Amar Cokhe Ajker Bangladesh" Video Competition',
    location: "Deepto TV Studio, Bangladesh",
    date: "2023",
    topic: "Showcasing Bangladesh’s development & progress",
    audience: "Evaluating 1,100+ submissions as a judge",
  },
  {
    event: "UAP CSE Software & Hardware Carnival 2020",
    location: "University of Asia Pacific, Bangladesh",
    date: "2020",
    topic: "Assessing software & hardware innovations",
    audience: "Providing feasibility & impact feedback",
  },
];

const impactMetrics = [
  {
    number: "30+",
    label: "Awards & Honors",
    description: "International recognition for business excellence",
  },
  {
    number: "50+",
    label: "Speaking Events",
    description: "Global speaking engagements",
  },
  {
    number: "100+",
    label: "Lives Impacted",
    description: "Through leadership initiatives",
  },
  {
    number: "15+",
    label: "Countries",
    description: "International recognition",
  },
];

const Awards = ({ className, isActive }: SectionComponentProps) => {
  const [isShow, setIsShow] = useState(false);
  const { setRef: setMetricsRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setAwardRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });
  const { setRef: setEngagementRef } = useIntersectionObserver({
    classNames: "animate-scale-in",
    options: { threshold: 0.1 },
  });

  return (
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <HeroSection
        isActive={isActive}
        image="/images/awards-banner.png"
        title="Awards & Recognition"
        description="A testament to excellence in business leadership, innovation, and organizational transformation through sustained commitment to excellence and impactful initiatives."
      />

      {/* Impact Metrics */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              ref={setMetricsRef(index)}
              className="transform rounded-xl bg-muted/25 p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105"
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

      {/* Major Awards */}
      <div className="container mx-auto mb-20 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">Major Awards</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {majorAwards
            .slice(0, isShow ? majorAwards?.length : 6)
            .map((award, index) => (
              <div
                key={index}
                ref={setAwardRef(index)}
                className="rounded-xl bg-muted/25 p-8 shadow-lg"
              >
                <div className="mb-6 flex justify-center">{award.icon}</div>
                <h3 className="mb-2 text-center text-xl font-semibold">
                  {award?.title}
                </h3>
                <div className="mb-2 text-center text-primary">
                  {award?.organization}
                </div>
                <div className="mb-4 text-center text-muted-foreground">
                  {award?.year}
                </div>
                <p className="mb-4 text-muted-foreground">
                  {award.description}
                </p>
                <div className="space-y-2">
                  {award.impact.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                {award?.link && (
                  <div className="mt-6">
                    <a
                      className="inline-flex cursor-pointer items-center gap-2 text-primary hover:underline"
                      target="_blank"
                      href={award?.link}
                    >
                      <span>Read More</span>
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
        {!isShow && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsShow(true)}
              className="button bg-muted/25 shadow-md"
            >
              <span>More Awards</span>
              <ArrowRight className="size-5" />
            </button>
          </div>
        )}
      </div>

      {/* Speaking Engagements */}
      <div className="container mx-auto mb-20 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Notable Speaking Engagements
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {speakingEngagements.map((engagement, index) => (
            <div
              key={index}
              ref={setEngagementRef(index)}
              className="rounded-xl bg-muted/25 p-8 shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold">{engagement.event}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Globe className="h-5 w-5 shrink-0 text-primary" />
                  <span>{engagement.location}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 shrink-0 text-primary" />
                  <span>{engagement.date}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Target className="h-5 w-5 shrink-0 text-primary" />
                  <span>{engagement.topic}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 shrink-0 text-primary" />
                  <span>{engagement.audience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-primary/75 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Interested in Speaking Engagements?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Book Towhid Hossain for your next event or conference
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-card px-8 py-3 font-semibold text-primary transition-colors hover:bg-opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Awards;
