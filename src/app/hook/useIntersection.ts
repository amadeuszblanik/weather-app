import { useState, useEffect, useRef } from "react";

type ROOT = Element | null;
type ROOT_MARGIN = string;
type THRESHOLDS = number | number[] | undefined;
type INTERSECTION_ENTRY = IntersectionObserverEntry;

const useIntersection = (root: ROOT = null, rootMargin: ROOT_MARGIN = "0px") => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [entry, setEntry] = useState<INTERSECTION_ENTRY | null>(null);

  const handleIntersect = ([event]: INTERSECTION_ENTRY[]) => {
    setEntry(event);
  };

  const buildTresholdList = (): THRESHOLDS => {
    const thresholdList: number[] = [];
    const numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      const ratio = i / numSteps;
      thresholdList.push(ratio);
    }

    thresholdList.push(0);

    return thresholdList;
  };

  const options: IntersectionObserverInit = { root, rootMargin, threshold: buildTresholdList() };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(handleIntersect, options);

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  let isIntersecting = false;
  let intersectionRatio = NaN;

  if (entry !== null) {
    if ("isIntersecting" in entry) {
      isIntersecting = entry.isIntersecting;
    }

    if ("intersectionRatio" in entry) {
      intersectionRatio = entry.intersectionRatio;
    }
  }

  return { isIntersecting, ref, intersectionRatio };
};

export default useIntersection;
