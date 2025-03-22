import { useEffect, useState } from "react";

const useScroll = (
  sections: string[] = [],
  scrollThreshold: number = 10,
  activeSectionOffset: number = 100,
) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);

      if (sections.length <= 0) return;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= activeSectionOffset &&
            rect.bottom >= activeSectionOffset
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, scrollThreshold, activeSectionOffset]);

  return { isScrolled, activeSection };
};

export default useScroll;
