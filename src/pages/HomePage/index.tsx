import AboutSection from "@/components/(home-page)/AboutSection";
import ContactSection from "@/components/(home-page)/ContactSection";
import HeroSection from "@/components/(home-page)/HeroSection";
import WorkSection from "@/components/(home-page)/WorkSection";
import useScrollEdgeDetection from "@/hooks/ui/useScrollEdgeDetection";
import useHash from "@/hooks/utils/useHash";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface SectionItem {
  id: string;
  name: string;
  element: React.ReactNode;
}

const sections: SectionItem[] = [
  { id: "home", name: "Home", element: <HeroSection /> },
  { id: "work", name: "Work", element: <WorkSection /> },
  { id: "about", name: "About", element: <AboutSection /> },
  { id: "contact", name: "Contact", element: <ContactSection /> },
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
  const sectionRef = useRef<HTMLElement>(null);

  useScrollEdgeDetection({
    onTop: () => {
      onPrev();
    },
    onBottom: () => {
      onNext();
    },
    ref: sectionRef,
  });

  return (
    <section
      id={item.id}
      ref={sectionRef}
      className={cn(
        "absolute inset-0 h-full overflow-auto bg-background transition-all duration-700",
        { "-translate-y-full": index !== currentIndex && index < currentIndex },
      )}
      style={{ zIndex: index * -1 }}
      onTransitionEnd={(e) => {
        if (index + 1 === currentIndex) {
          e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
        } else if (currentIndex !== index) {
          e.currentTarget.scrollTop = 0;
        }
      }}
    >
      {item.element}
    </section>
  );
};

const HomePage = () => {
  const { hash } = useHash();

  const currentIndex =
    sections.findIndex((section) => section.id === hash) || 0;

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
    <main className="relative z-10 h-screen overflow-hidden">
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
        <div className="absolute left-8 top-1/2 h-1/2 w-1 -translate-y-1/2 overflow-hidden rounded-full bg-foreground/25">
          <div
            style={{
              height: (currentIndex / (sections?.length - 1)) * 100 + "%",
            }}
            className="w-full bg-primary transition-all duration-300 ease-in-out"
          ></div>
        </div>
      </>
    </main>
  );
};

export default HomePage;
