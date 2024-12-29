"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaAngular,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiSwift, SiKotlin, SiMysql } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "Akkddkvjkv jdihfjv djvijgrg.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Alexej Krasnokutskij",
        },
        {
            fieldName: "Email",
            fieldValue: "alex27@gmail.com",
        },
        {
            fieldName: "Phone",
            fieldValue: "+49 123 5656565",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "German",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "German, English, Russian",
        },
    ],
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "kkckdhc dfgsvd grtgdffasfsfdvd dsdfrgsdfdf.",
    items: [
        {
            company: "Stückwerk Lüdenscheid",
            position: "Service employee",
            duration: "2022-2025",
        },
        {
            company: "Alles Taco Lüdenscheid",
            position: "Store Manager",
            duration: "2019-2022",
        },
        {
            company: "Blubberbotschaft UG",
            position: "Store Manager",
            duration: "2018-2022",
        },
        {
            company: "Erwin Seckelmann Kunstofftechnik",
            position: "Process mechanic",
            duration: "2018-2019",
        },
        {
            company: "Escha GmbH & Co.KG",
            position: "Picking",
            duration: "2015-2018",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "kkckdhc dfgsvd grtgdffasfsfdvd dsdfrgsdfdf.",
    items: [
        {
            insitution: "Udemy Course",
            degree: "iOS & Swift Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Udemy Course",
            degree: "Angular course",
            duration: "2024",
        },
        {
            insitution: "Udemy Course",
            degree: "ASPNET Core Angular app from scratch",
            duration: "2024",
        },
        {
            insitution: "Udemy Course",
            degree: "•NET Core MVC app",
            duration: "2023",
        },
        {
            insitution: "Syntax Institut",
            degree: "App Deverloper",
            duration: "2022-2023",
        },{
            insitution: "Gesamtschule Kierspe",
            degree: "medium maturity",
            duration: "until 2015",
        },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description: "kkckdhc dfgsvd grtgdffasfsfdvd dsdfrgsdfdf.",
    skillList: [
        {
            icon: <SiSwift />,
            name: "Swift",
        },
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaAngular />,
            name: "angular",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <SiMysql />,
            name: "mysql",
        },
        {
            icon: <SiKotlin />,
            name: "kotlin",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                            <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                            <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.insitution}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
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
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li 
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
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