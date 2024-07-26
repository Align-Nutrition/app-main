"use client";

import { CSSProperties, ReactNode, UIEvent, useState } from "react";

function ScrollIndicator({
  className,
  children,
  style,
}: {
  className: string;
  children: ReactNode;
  style: CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default function useScrollIndicator() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollEvent = (e: UIEvent<HTMLElement>) => {
    const { scrollLeft } = e.currentTarget;
    setScrollLeft(scrollLeft);
  };

  const calculatedOpacity = () => {
    if (scrollLeft === 0) return 1;
    if (scrollLeft > 100) return 0;
    return 1 - scrollLeft / 100;
  };

  return {
    calculatedOpacity,
    onScroll: handleScrollEvent,
    scrollLeft,
    ScrollIndicator,
  };
}
