"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+49 160 1869831",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "allxyog@gmail.com",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        description: (
            <a
                href="https://www.linkedin.com/in/alexej-krasnokutskij-3a2920235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
            >
                𝑪𝒍𝒊𝒄𝙠👆🏼
            </a>
        ),
    },
];

import { motion } from "framer-motion";


const Contact = () => {
    return ( 
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */ }
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together 🤜🏼🤛🏽</h3>
                            <p className="text-white/60">
                                Are you looking for a passionate developer to bring your ideas to life? As a junior iOS and web developer, I’m eager to take on new challenges and help you create functional and user-friendly applications or websites. While I’m still growing in my career, I’m committed to delivering high-quality work and learning along the way. Let’s collaborate and make your project a reality! Fill out the form, and I’ll get in touch to discuss how we can work together to bring your vision to life.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">iOS</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            {/* button */}
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */ }
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;