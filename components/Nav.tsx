"use client";
import { Button } from "@/components/ui/button";
import useActiveSection from "@/hooks/useActiveSection";
import { FaGithub, FaLinkedin, FaEnvelope, FaGoodreads } from "react-icons/fa";
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
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
  
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <animated.p style={fadeIn} className="text-[42px] font-bold lg:text-start">
          Roshni Khatri
        </animated.p>
        <animated.p style={fadeIn2} className="text-xl lg:text-start">
          Data-Driven Problem Solver
        </animated.p>
        <animated.p style={fadeIn3} className="text-base lg:text-start text-muted-foreground">
          I deliver actionable insights that enhance <br></br>
          decision-making and drive results.
        </animated.p>
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
          href="mailto:khatrirr@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaEnvelope className="h-[1.2rem] w-[1.2rem]" />
            </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/roshnik1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/roshnik1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
          href="https://www.goodreads.com/user/show/79824790-roshni" 
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaGoodreads className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        {/* <ModeToggle /> */}
      </ul>
    </header>
  );
}
