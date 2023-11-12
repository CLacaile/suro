import { useRef, useCallback } from "react";

export function useIntersectionObserver(onIntersection, options) {
  const observer = useRef();

  // useCallback will call the given callback each time a node targetted by the targetRef is in the DOM
  const targetRef = useCallback((targetNode) => {
    console.log("🚀 ~ file: useIntersectionObserver.js:8 ~ targetRef ~ targetNode:", targetNode)
    
    if (observer.current) observer.current.disconnect();

    // when the node enters the window and becomes visible (ie. "intersects"), we call the onIntersect function
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        console.log("intersection detected!");
        if (onIntersection.constructor.name === "AsyncFunction") {
          await onIntersection();
        } else {
          onIntersection();
        }
      }
    }, options);

    if (targetNode) observer.current.observe(targetNode);
  }, []);

  return targetRef;
}
