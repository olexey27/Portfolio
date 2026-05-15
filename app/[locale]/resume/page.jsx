"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAngular, FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSwift, SiKotlin, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const skillList = [
  { icon: <SiSwift />,      name: "Swift" },
  { icon: <FaHtml5 />,      name: "HTML 5" },
  { icon: <FaCss3 />,       name: "CSS 3" },
  { icon: <FaJs />,         name: "JavaScript" },
  { icon: <FaReact />,      name: "React.js" },
  { icon: <SiNextdotjs />,  name: "Next.js" },
  { icon: <SiTailwindcss />,name: "Tailwind CSS" },
  { icon: <FaNodeJs />,     name: "Node.js" },
  { icon: <FaAngular />,    name: "Angular" },
  { icon: <FaJava />,       name: "Java" },
  { icon: <SiMysql />,      name: "MySQL" },
  { icon: <SiKotlin />,     name: "Kotlin" },
];

const experience_items = [
  { company: "Teleperformance Portugal", position: "Content Manager",  duration: "2025 – Now" },
  { company: "Stückwerk Lüdenscheid",    position: "Service Employee", duration: "2022 – 2025" },
  { company: "Alles Taco GmbH",         position: "Store Manager",    duration: "2019 – 2022" },
  { company: "Blubberbotschaft UG",      position: "Store Manager",    duration: "2018 – 2022" },
  { company: "Erwin Seckelmann Kunststofftechnik", position: "Process Mechanic", duration: "2018 – 2019" },
  { company: "ESCHA GmbH & Co.KG",      position: "Commissioning",    duration: "2015 – 2018" },
];

const education_items = [
  { institution: "Udemy",           degree: "iOS Development – SwiftUI, SwiftData, AI", duration: "2026" },
  { institution: "Udemy",           degree: "iOS & Swift – Bootcamp",   duration: "2024" },
  { institution: "Udemy",           degree: "Complete Angular Course 2024",                              duration: "2024" },
  { institution: "Udemy",           degree: "App with ASP.NET Core and Angular",   duration: "2024" },
  { institution: "Udemy",           degree: ".NET Core MVC – [E-commerce app]",       duration: "2023" },
  { institution: "Syntax Institut", degree: "App Development (iOS & Android)",          duration: "2022 – 2023" },
  { institution: "Gesamtschule Kierspe", degree: "Education Intermediate Diploma",           duration: "until 2015" },
];

const Resume = () => {
  const t = useTranslations("resume");

  const about_info = [
    { fieldName: t("about.fields.name"),        fieldValue: "Alexej Krasnokutskij" },
    { fieldName: t("about.fields.email"),       fieldValue: "alexeykrasnokutskiy@googlemail.com" },
    { fieldName: t("about.fields.phone"),       fieldValue: "+49 160 1869831" },
    { fieldName: t("about.fields.experience"),  fieldValue: t("about.fields.experienceValue") },
    { fieldName: t("about.fields.nationality"), fieldValue: t("about.fields.nationality_value") },
    { fieldName: t("about.fields.freelance"),   fieldValue: t("about.fields.freelance_value") },
    { fieldName: t("about.fields.languages"),   fieldValue: t("about.fields.languages_value") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("tabs.experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("tabs.education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("tabs.skills")}</TabsTrigger>
            <TabsTrigger value="about">{t("tabs.about")}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("experience.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("experience.description")}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience_items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("education.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("education.description")}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education_items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t("skills.title")}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t("skills.description")}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t("about.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("about.description")}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about_info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;