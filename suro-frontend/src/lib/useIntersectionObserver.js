import { useRef, useCallback } from "react";

export function useIntersectionObserver(onIntersection) {
  const observer = useRef();

  // useCallback will call the given callback each time a node targetted by the targetRef is in the DOM
  const targetRef = useCallback((targetNode) => {
    if (observer.current) observer.current.disconnect();

    // when the node enters the window and becomes visible (ie. "intersects"), we call the onIntersect function
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        if (onIntersection.constructor.name === "AsyncFunction") {
          await onIntersection();
        } else {
          onIntersection();
        }
      }
    });

    if (targetNode) observer.current.observe(targetNode);
  }, []);

  return targetRef;
}
