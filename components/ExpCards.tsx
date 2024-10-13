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

const jobPositions = [
  {
    timeline: "June 2024 — Present",
    currentPosition: "SAP Business Analyst",
    place: "Nutrien",
    previousPositions: [""],
    description:
      "I analyze data to support business decisions and improve processes. Using Power BI, Excel, and SQL, I create dashboards and provide actionable insights that drive efficiency and optimize operations. I collaborate with teams to translate complex data into clear recommendations.",
    skills: [
      "Data Analysis",
      "Dashboard Development",
      "Excel Expertise",
      "SQL Querying",
      "Crtical Thinking",
      "Cross-functional Collaboration",
    ],
  },
  {
    timeline: "Aug 2023 — March 2024",
    currentPosition: "Research Assistant (Data Analytics)",
    place: "University of Cincinnati, College of Medicine",
    previousPositions: [""],
    description:
      "During my internship, I processed and analyzed Traumatic Brain Injury (TBI) patient data using Python and SQL. This experience helped me extract insights from complex datasets and enhance my data analysis skills.",
    skills: [
      "Statistical Analysis",
      "Programming (Python/SQL)",
      "ETL Processes",
      "Tableau",
      "Team collaboration",
    ],
  },
  {
    timeline: "May 2023 — August 2023",
    currentPosition: "SAP Technical Intern",
    place: "Delaware North America",
    previousPositions: [""],
    description:
      "I analyzed SAP datasets using Excel and SQL, enhancing data workflows. I built dashboards in Power BI for improved metrics visibility, conducted A/B testing to evaluate data strategies, and collaborated with teams to refine data processes.",
    skills: [
      "Power BI",
      "A/B Testing",
      "SQL Profiency",
      "Requirements gathering",
    ],
  },
  {
    timeline: "May 2021 — April 2023",
    currentPosition: "Research Assistant (Data Analytics)",
    place: "University of Cincinnati, College of Medicine",
    previousPositions: [""],
    description:
      "I developed a Bash-based pipeline to streamline data processing. I analyzed gene datasets with R and SQL to uncover patterns and enhance insights. I also implemented quality control measures and collaborated with teams to interpret results and support projects.",
    skills: [
      "Python",
      "R",
      "PostgreSQL",
      "Bash",
      "ETL",
    ],
  },
  {
    timeline: "May 2020 — Aug 2020",
    currentPosition: "Data Analyst Apprenticeship",
    place: "Accenture",
    previousPositions: [""],
    description:
      "Analyzed enrollment trends during COVID-19 using Python and SQL, designed a database schema for tracking, and created visualizations and Tableau dashboards to highlight the pandemic's impact on education.",
    skills: [
      "SQL",
      "Database Design",
      "Problem-Solving",
      "Trend analysis"
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-sm text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
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
        ))}
      </>
    </section>
  );
}
