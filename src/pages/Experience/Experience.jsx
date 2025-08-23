import React from "react";
import { Code2, Network, Layers } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Assistant Software Developer (MERN Stack)",
      company: "SpidronTech LLP, Pune",
      period: "May 2023 – Present",
      description:
        "Working as a MERN Stack Developer, contributing to scalable web and mobile application development. Responsibilities include building REST APIs, implementing authentication, integrating third-party services, and collaborating in Agile teams.",
    },
    {
      icon: Layers,
      title: "Java Full Stack Course (Training)",
      company: "Java Full Stack Program",
      period: "Oct 2022 – May 2023",
      description:
        "Completed intensive training in Java Full Stack Development. Learned Core Java, Spring Boot, Hibernate, REST APIs, SQL/NoSQL databases, and frontend basics to strengthen backend and enterprise-level development skills.",
    },
    {
      icon: Code2,
      title: "Software Engineer (Academic & Freelance Projects)",
      company: "Freelance / Academic",
      period: "2021 – 2022",
      description:
        "Built academic and freelance projects using JavaScript, Node.js, React, and MongoDB. Gained hands-on experience in full-stack application development before formal training.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into scalable digital solutions with modern web and mobile technologies."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
