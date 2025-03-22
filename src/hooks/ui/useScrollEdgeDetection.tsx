import debounce from "@/utils/debounce"; // Import the custom debounce function
import React, { useEffect } from "react";

interface UseScrollEdgeDetectionProps {
  ref?: React.RefObject<HTMLElement> | null;
  onBottom?: () => void;
  onTop?: () => void;
  buffer?: number;
  delay?: number;
}

const useScrollEdgeDetection = ({
  ref,
  onTop,
  onBottom,
  buffer = 0,
  delay = 300,
}: UseScrollEdgeDetectionProps): void => {
  useEffect(() => {
    const handleScroll = debounce((e: WheelEvent): void => {
      const container = ref?.current || document.documentElement;
      const documentHeight = container.scrollHeight;
      const scrollTop =
        container.scrollTop ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const viewportHeight = ref?.current
        ? ref.current.clientHeight
        : window.innerHeight;

      if (e.deltaY < 0 && scrollTop <= buffer) {
        if (onTop) onTop();
      }

      if (
        e.deltaY > 0 &&
        scrollTop + viewportHeight >= documentHeight - buffer
      ) {
        if (onBottom) onBottom();
      }
    }, delay);

    const targetElement = ref?.current || window;
    targetElement.addEventListener("wheel", handleScroll);

    return () => {
      targetElement.removeEventListener("wheel", handleScroll);
      handleScroll.cancel();
    };
  }, [ref, onBottom, onTop, buffer, delay]);
};

export default useScrollEdgeDetection;
