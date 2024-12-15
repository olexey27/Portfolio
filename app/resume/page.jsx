"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
            company: "Company 1",
            position: "Position 1",
            duration: "2020-2022",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "2020-2022",
        },
        {
            company: "Company 3",
            position: "Position 3",
            duration: "2020-2022",
        },
        {
            company: "Company 4",
            position: "Position 4",
            duration: "2020-2022",
        },
        {
            company: "Company 5",
            position: "Position 5",
            duration: "2020-2022",
        },
        {
            company: "Company 6",
            position: "Position 6",
            duration: "2020-2022",
        },
        {
            company: "Company 7",
            position: "Position 7",
            duration: "2020-2022",
        },
        {
            company: "Company 8",
            position: "Position 8",
            duration: "2020-2022",
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
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
        {
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },{
            insitution: "Online Course Platform",
            degree: "Full Stack web Dev Bootcamp",
            duration: "2024",
        },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description: "kkckdhc dfgsvd grtgdffasfsfdvd dsdfrgsdfdf.",
    skillList: [
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
            icon: <FaFigma />,
            name: "figma",
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
                            experience
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;