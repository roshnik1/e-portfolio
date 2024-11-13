"use client";

import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const BoldT = styled.span`
  font-weight: bold;
  color: white;
`;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 150, friction: 20 },
  });

  const fadeIn2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 200, // Staggered delay for the second paragraph
    config: { tension: 100, friction: 20 },
  });


  // Third paragraph animation with further delay
  const fadeIn3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 400, // Staggered delay for the third paragraph
    config: { tension: 100, friction: 20 },
  });

  // Fourth paragraph animation with further delay
  const fadeIn4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 600, // Staggered delay for the fourth paragraph
    config: { tension: 100, friction: 20 },
  });

  return (
    <section id="about" className="scroll-mt-20 mt-[10px]">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <animated.p style={fadeIn} className="text-start text-muted-foreground lg:px-2">
        Hi there! I’m a data analyst with a passion for turning complex datasets into actionable insights.
        Back in college, I discovered my passion for <BoldT>data analytics</BoldT> through 
        various internships and projects, where I worked on projects processing large-scale retail and financial
        data, sparking my interest in using data to solve real-world problems.
        </animated.p>
        <animated.p style={fadeIn2} className="text-start  text-muted-foreground lg:px-2">
        Currently, I am a SAP Business Analyst at a global corporation, specializing in 
        <BoldT> Power BI, SQL,</BoldT> and <BoldT>Python</BoldT> to help teams 
        make data-driven decisions and drive business growth. I build dashboards, analyze trends, 
        and uncover insights that empower teams to make informed choices 
        and improve performance.
        </animated.p>
        <animated.p style={fadeIn3} className="text-start text-muted-foreground lg:px-2">
        In previous roles, I’ve worked across industries like <BoldT> healthcare </BoldT>and <BoldT> finance, </BoldT>
        where I developed business intelligence solutions, automated data processes, 
        and collaborated with teams to ensure key decision-makers had access to the insights they needed.
        </animated.p>
        <animated.p style={fadeIn4} className="text-start text-muted-foreground lg:px-2">
        Outside of work, I’m an outdoor enthusiast, hiking and trail running through Colorado’s mountains. 
        I also love reading and learning, continually striving for personal and professional growth. 
        </animated.p>
      </div>
    </section>
  );
}
