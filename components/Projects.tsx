"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { MoveRight } from "lucide-react";
import FadeInOnScroll from './FadeInOnScroll';

const jobProjects = [
  {
    imagePath: "/code_assistant.png",
    title: "AI-Driven Python Coding Assistant",
    description:
      "This is an OpenAI-powered platform developed for Python 101 students at the University of Cincinnati to provide assignment feedback and assist with coding challenges, enhancing their learning experience.",
    skills: [
      "Python",
      "Artificial Intelligence",
      "Open-AI",
      "Chatbot",
      "HTML/CSS/Javascript",
      "Vercel",
      "Firebase"
    ],
    link: "https://github.com/roshnik1/CodeInCStructor.ai",
  },
  {
    imagePath: "/krodash.png",
    title: "KroDash - Retail Data Dashboard",
    description:
      "Krodash is a Kroger retail data dashboard that provides timely insights into sales performance, regional levels, and product behavior, enabling data-driven decision-making for retail operations.",
    skills: [
      "SQLite",
      "Dashboard Development",
      "Flask",
      "HTML/CSS/Javascript",
      "PostgreSQL",
      "Azure",
      "Heroku",
    ],
    link: "https://github.com/roshnik1/KroDash",
  },
  {
    imagePath: "/snl_cast.png",
    title: "SNL Cast Analytics",
    description:
      "This project analyzes cast tenure and gender representation to highlight diversity trends within SNL's history. It provides insights into the evolving landscape of representation in television.",
    skills: [
      "Tableau",
      "Python",
      "Data Analysis"
    ],
    link: "https://github.com/roshnik1/snl-analytics",
  },
  {
    imagePath: "/SwiftSense.png",
    title: "SwiftSense",
    description:
      "This exploratory ML project analyzes Taylor Swift's lyrics to uncover meanings and provide insights through natural language processing techniques.",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "OpenAI"
    ],
    link: "https://github.com/roshnik1/SwiftSense",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <h2 className="text-base lg:text-start text-bold">
        E X P E R I E N C E
        <br />
        <br />
      </h2>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <FadeInOnScroll key={index} threshold={0.5} duration="5000ms">
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 bg-transparent border-transparent hover:border dark:lg:hover:border-t-[#b94bfa]/60 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-[#b94bfa]/60 transition-transform transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-white group-hover:text-[#d896ff] font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:text-[#d896ff] group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        </FadeInOnScroll>
        ))}
      </>
      <div className="lg:px-6 mt-12">
        <a
          href="https://github.com/roshnik1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:text-[#d896ff] hover:border-[#d896ff] motion-reduce:transition-none">
            View Full Project Archive
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:text-[#d896ff] group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
