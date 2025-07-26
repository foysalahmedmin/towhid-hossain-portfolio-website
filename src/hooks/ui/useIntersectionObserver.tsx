import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

type UseIntersectionObserver = {
  classNames: string;
  options?: Options;
  isToggle?: boolean;
  isUnobservable?: boolean;
  callback?: (isIntersecting: boolean, element: Element) => void;
};

export const useIntersectionObserver = ({
  classNames,
  options = { threshold: 0 },
  isToggle = true,
  isUnobservable = true,
  callback,
}: UseIntersectionObserver) => {
  const elementRefs = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;

        if (callback) {
          callback(entry.isIntersecting, target);
        }

        if (isToggle) {
          target.classList.toggle(classNames, entry.isIntersecting);
        } else {
          if (entry.isIntersecting) {
            target.classList.add(classNames);
            if (isUnobservable) {
              observer.unobserve(target);
            }
          }
        }
      });
    }, options);

    elementRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementRefs.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [classNames, options, isToggle, callback]);

  const setRef =
    (index: number = 0) =>
    (element: Element | null) => {
      elementRefs.current[index] = element;
    };

  return { setRef };
};
