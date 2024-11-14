import React, { useState, useEffect, useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  threshold?: number;  // Optional: visibility threshold (default is 0.5)
  duration?: string;    // Optional: animation duration (default is '2000ms')
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, threshold = 0.5, duration = '5000ms' }) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Trigger fade-in when the element is in view
          }
        });
      },
      {
        threshold,  // The percentage of the element that must be visible to trigger fade-in
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Start observing the element
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect(); // Cleanup observer on unmount
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`transition-all transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-[${duration}] ease-out`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
