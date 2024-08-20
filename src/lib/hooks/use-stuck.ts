import { MutableRefObject, useEffect, useState } from "react";

type StuckProps = {
  elementRef?: MutableRefObject<null | Element>;
};

export default function useStuck({ elementRef }: StuckProps) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const initialPosition = elementRef?.current?.getBoundingClientRect();
    const listener = () => {
      if (elementRef?.current && initialPosition) {
        setIsStuck(window.scrollY > initialPosition.top);
      }
    };

    window.addEventListener("scroll", listener, false);

    return () => {
      window.removeEventListener("scroll", listener, false);
    };
  }, [elementRef]);

  return { isStuck };
}
