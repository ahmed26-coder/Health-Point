"use client";

import { useState, useEffect, useRef } from "react";

const ScrollProgressBar = (props) => {
  const { progressValue = 0 } = props;
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress >= progressValue) {
                clearInterval(intervalRef.current);
                return progressValue;
              }
              return oldProgress + 1;
            });
          }, 50);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      clearInterval(intervalRef.current);
    };
  }, [progressValue]);

  return (
    <div ref={ref} className="px-4 py-2 rounded-lg text-white">
      <div className="relative w-[300px] md:w-[500px] h-4 border-1 border-gray-300 rounded-full bg-second-bg-color -ml-3 sm:mx-[10%] md:mx-[0%]">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full bg-button transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="absolute text-sm text-black -top-0.5 right-5">{progress}%</span>
      </div>
    </div>
  );
}

export default ScrollProgressBar;
