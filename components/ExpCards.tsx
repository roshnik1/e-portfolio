"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import FadeInOnScroll from './FadeInOnScroll';
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const jobPositions = [
  {
    timeline: "June 2024 — Present",
    currentPosition: "SAP Business Analyst",
    place: "Nutrien",
    previousPositions: [""],
    description:
      "Analyze data to support business decisions, improve processes, and drive efficiency by providing actionable insights and collaborating with teams to turn complex data into clear, strategic recommendations.",
    skills: [
      "Dashboard Development",
      "Advanced Excel Expertise",
      "Advanced SQL",
      "Crtical Thinking",
      "Power BI",
      "SAP ERP"
    ],
    link: "https://www.nutrien.com/about"
  },
  {
    timeline: "Aug 2023 — March 2024",
    currentPosition: "Research Assistant (Data Analytics)",
    place: "University of Cincinnati, College of Medicine",
    previousPositions: [""],
    description:
      "Analyzed clinical data to improve reporting accuracy, created dashboards to visualize outcomes, and worked with clinical teams to align analytics with operational goals.",
    skills: [
      "Statistical Analysis",
      "Clinical Data",
      "Programming (Python/SQL)",
      "ETL",
      "Tableau",
      "CI/CD Pipeline"
    ],
    link: "https://med.uc.edu/depart/neurosurgery/research/neurotrauma/alumni",
  },
  {
    timeline: "May 2023 — Aug 2023",
    currentPosition: "SAP Technical Intern",
    place: "Delaware North America",
    previousPositions: [""],
    description:
      "Evaluated SAP datasets to improve metrics visibility, conducted A/B testing to optimize data strategies, and collaborated with teams to streamline and document workflows, enhancing efficiency.",
    skills: [
      "Power BI",
      "A/B Testing",
      "SQL Profiency",
      "Requirements gathering",
      "ERP",
      "DBT"
    ],
    link: "https://www.delawareconsulting.com/en-us/about-us",
  },
  {
    timeline: "May 2021 — April 2023",
    currentPosition: "Research Assistant (Data Analytics)",
    place: "University of Cincinnati, College of Medicine",
    previousPositions: [""],
    description:
      "Built a pipeline to streamline data processing, analyzed gene datasets for insights, implemented quality control, and presented research at conferences, securing funding for future projects.",
    skills: [
      "Python",
      "Big Data",
      "Spark",
      "R",
      "PostgreSQL",
      "Linux/Bash",
      "ETL Processes",
      "K-Means Clustering"
    ],
    link: "https://med.uc.edu/depart/neurosurgery/research/neurotrauma/alumni",
  },
  {
    timeline: "May 2020 — Aug 2020",
    currentPosition: "Data Analyst Apprenticeship",
    place: "Accenture",
    previousPositions: [""],
    description:
      "Analyzed enrollment trends during COVID-19, optimized data tracking, created visualizations, and developed dashboards to support senior management’s decisions.",
    skills: [
      "SQL",
      "Database Design",
      "Problem-Solving"
    ],
    link: "https://www.accenture.com/us-en", 
  },
];

export default function ExpCard() {
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

  return (
    <section id="experience" className="scroll-mt-15 pt-20 lg:mt-20">
      <h2 className="text-base lg:text-start text-bold">
        E X P E R I E N C E
        <br />
        <br />
      </h2>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-md font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>

      {jobPositions.map((job, index) => (
        <FadeInOnScroll key={index} threshold={0.5} duration="5000ms"> {/* Fade-up effect with slow transition */}
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 bg-transparent border-transparent hover:border dark:lg:hover:border-t-[#b94bfa]/60 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-[#b94bfa]/60 transition-transform transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="h-full w-[400px] p-0">
                <CardTitle className="text-sm w-[170px] text-slate-500 whitespace-nowrap">
                  {job.timeline}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col p-0">
                <p className="text-white group-hover:text-[#d896ff] cursor-pointer font-bold">
                  {job.currentPosition} • {job.place}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:text-[#d896ff] group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                {job.previousPositions.map((position, index) => (
                  <p key={index} className="text-slate-400 text-sm font-bold">
                    {position}
                  </p>
                ))}
                <CardDescription className="py-3 text-muted-foreground">
                  {job.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        </FadeInOnScroll>
      ))}
    </section>
  );
}