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
    description: "I’m Alexej, a passionate iOS and web developer focused on creating modern, user-friendly applications and innovative web solutions. With over 3 years of experience in software development, I specialize in building scalable apps for the Apple ecosystem as well as performant, responsive websites. I combine technical expertise in Swift, SwiftUI, and Objective-C with comprehensive knowledge of web technologies like HTML, CSS, JavaScript, and modern frameworks (e.g., React, Angular). My goal is to create high-quality software that excels both technically and visually.In my work, I place great emphasis on clean code, agile processes, and close collaboration with my clients to deliver tailored solutions. I look forward to working on new projects that enhance digital experiences and deliver sustainable results.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Alexej Krasnokutskij",
        },
        {
            fieldName: "Email",
            fieldValue: "allxyog@gmail.com",
        },
        {
            fieldName: "Phone",
            fieldValue: "+49 160 1869831",
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
    description: "Throughout my career, I have gained diverse experience across various industries, which has shaped my strong work ethic, problem-solving abilities, and teamwork skills. As a Service Employee, I developed excellent customer service and communication skills, always striving to ensure client satisfaction in a fast-paced environment. My time as a Store Manager helped me refine my leadership abilities, from managing teams and controlling inventory to overseeing daily operations and ensuring everything ran smoothly. In the past, I worked as a Process Mechanic, where I learned to work systematically and pay close attention to detail. My role involved overseeing and optimizing production processes to ensure high-quality results. Additionally, my experience in Picking taught me how to stay organized and efficient, even under tight deadlines. These experiences have given me a versatile skill set and a proactive mindset. I enjoy taking on new challenges and adapting to different environments, always looking for ways to grow and contribute effectively to my work.",
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
    description: "I completed a comprehensive training program in app development, where I gained a strong foundation in building mobile applications and understanding software development principles. This formal education provided me with expertise in core programming languages and frameworks, particularly in iOS development with Swift. To further enhance my knowledge and stay updated with industry trends, I pursued additional learning through Udemy courses. These self-paced programs allowed me to deepen my understanding of modern technologies such as Kotlin, JavaScript, React, and Angular, enabling me to expand my skill set and deliver high-quality software solutions. My commitment to continuous learning has equipped me with the tools and skills to tackle complex projects and adapt to evolving technologies.",
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
            degree: "ASPNET Core Angular app",
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
    description: "I have extensive experience in developing modern applications and web solutions, with a primary focus on Swift and JavaScript, my core programming languages. Leveraging these skills, I create powerful, feature-rich iOS applications as well as dynamic and interactive web applications tailored to user needs. In addition to my expertise in Swift and JavaScript, I possess solid knowledge of Kotlin for Android development, allowing me to build efficient and scalable mobile solutions across platforms. My proficiency extends to modern frontend frameworks such as Angular and React, which I use to design and implement responsive, high-performing, and user-centric web interfaces. My diverse technical skill set empowers me to deliver cross-platform and bespoke software solutions that are both functionally robust and visually appealing. I stay committed to maintaining clean, efficient code while adhering to industry best practices, ensuring every project meets high standards of quality and performance. Furthermore, I am continuously advancing my skills by exploring emerging technologies, keeping up with the latest trends, and applying innovative approaches to problem-solving. This drive for excellence ensures that my work not only meets but exceeds expectations.",
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