import { useEffect, useState } from "react";

type IntersectionObserverProps = {
  elementRef: {
    current?: Element | null;
  };
  rootMargin?: string;
};

export default function useIntersectionObserver({
  elementRef,
  rootMargin,
}: IntersectionObserverProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, [elementRef, rootMargin]);
  return {
    isIntersecting,
  };
}
