import About from "@/components/(home-page)/About";
import Awards from "@/components/(home-page)/Awards";
import CommercialSuccess from "@/components/(home-page)/CommercialSuccess";
import Contact from "@/components/(home-page)/Contact";
import GlobalEngagement from "@/components/(home-page)/GlobalEngagement";
import Hero from "@/components/(home-page)/Hero";
import LeadingRole from "@/components/(home-page)/LeadingRole";
import News from "@/components/(home-page)/News";
import Header from "@/components/partials/Header";
import { SOCIAL } from "@/constants/social";
import usePageScroll from "@/hooks/ui/usePageScroll";
import useHash from "@/hooks/utils/useHash";
import type { SectionComponentProps, SectionItem } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const sections: SectionItem[] = [
  {
    id: "home",
    name: "Home",
    component: Hero,
  },
  {
    id: "about",
    name: "About",
    component: About,
  },
  {
    id: "commercial-success",
    name: "Commercial Success",
    component: CommercialSuccess,
  },
  {
    id: "leading-role",
    name: "Leading Role",
    component: LeadingRole,
  },
  {
    id: "awards",
    name: "Awards",
    component: Awards,
  },
  {
    id: "global-engagement",
    name: "Global Engagement",
    component: GlobalEngagement,
  },
  {
    id: "news",
    name: "News",
    component: News,
  },
  {
    id: "contact",
    name: "Contact",
    component: Contact,
  },
];

interface SectionProps {
  item: SectionItem;
  index: number;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const Section = ({
  item,
  index,
  currentIndex,
  onNext,
  onPrev,
}: SectionProps) => {
  const { setRef } = usePageScroll({
    onPrev,
    onNext,
  });

  const Component = item.component as React.ElementType<SectionComponentProps>;

  return (
    <section
      id={item.id}
      ref={setRef(index)}
      className={cn(
        "group absolute inset-0 size-full overflow-y-auto overflow-x-hidden bg-background text-foreground transition-all duration-700",
        { active: index === currentIndex },
        { "-translate-y-full": index !== currentIndex && index < currentIndex },
      )}
      style={{ zIndex: index * -1 }}
    >
      <Header
        className={cn({
          "dark fixed bg-transparent text-foreground": index === 0,
        })}
      />
      <Component isActive={index === currentIndex} />
    </section>
  );
};

const HomePage = () => {
  const { hash } = useHash();

  const currentIndex = hash
    ? sections.findIndex((section) => section.id === hash) || 0
    : 0;

  const onNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= sections.length) return;
    window.location.hash = sections[nextIndex].id;
  };

  const onPrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) return;
    window.location.hash = sections[prevIndex].id;
  };

  return (
    <main className={cn("relative z-10 h-screen w-screen overflow-hidden")}>
      <>
        {sections.map((section, index) => (
          <Section
            key={section.id}
            item={section}
            index={index}
            currentIndex={currentIndex}
            onNext={onNext}
            onPrev={onPrev}
          />
        ))}
      </>
      <>
        <div
          className={cn(
            "absolute left-4 top-1/2 hidden h-1/2 w-1 -translate-y-1/2 overflow-hidden rounded-full bg-foreground/25 lg:left-8 lg:block",
            {
              dark: currentIndex === 0,
            },
          )}
        >
          <div
            style={{
              height: ((currentIndex + 1) / sections?.length) * 100 + "%",
            }}
            className="w-full bg-primary transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </>
      <>
        <div
          className={cn(
            "absolute right-4 top-1/2 hidden h-1/2 -translate-y-1/2 flex-col items-center gap-4 overflow-hidden rounded-full lg:right-8 lg:flex",
            {
              dark: currentIndex === 0,
            },
          )}
        >
          <div className="w-1 flex-1 rounded-full bg-foreground/25" />
          <div>
            <ul className="flex flex-col gap-2">
              {SOCIAL?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full border border-current text-foreground transition-all duration-500 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <item.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1 flex-1 rounded-full bg-foreground/25" />
        </div>
      </>
    </main>
  );
};

export default HomePage;
