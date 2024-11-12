"use client";
import { Button } from "@/components/ui/button";
import useActiveSection from "@/hooks/useActiveSection";
import { FaGoodreadsG, FaGithub, FaLinkedin, FaEnvelope, FaGoodreads } from "react-icons/fa";
import { MoveRight } from "lucide-react";
type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
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
        <h1 className="text-[42px] font-bold lg:text-start">
          Roshni Khatri
        </h1>
        <h2 className="text-xl lg:text-start">
          Data-Driven Problem Solver
        </h2>
        <p className="text-base lg:text-start text-muted-foreground">
          I deliver actionable insights that enhance <br></br>
          decision-making and drive results.
        </p>
      </div>
      <div className="lg:px-0 mt-0">
        <a
          href="https://github.com/roshnik1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:text-[#d896ff] hover:border-[#d896ff] motion-reduce:transition-none">
            View Full Résumé
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:text-[#d896ff] group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
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
