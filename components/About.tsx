"use client";
/* eslint-disable */
import styled from 'styled-components';

const BoldT = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        Back in college, I discovered my passion for <BoldT>data analytics</BoldT> through 
        various projects. This experience allowed me to process large-scale biological 
        data and develop <BoldT>business intelligence solutions</BoldT> for a global corporation.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
        Currently, I leverage data for insights and decision-making by 
        analyzing trends and developing dashboards with 
        <BoldT> Power BI,</BoldT> using <BoldT>SQL</BoldT> and <BoldT>Python</BoldT> to 
        enhance business performance.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
        When I'm not diving into data, I enjoy exploring Colorado's 
        mountains, running, and hiking. I also love reading and 
        learning, continually striving for personal and professional growth.
        </p>
      </div>
    </section>
  );
}
