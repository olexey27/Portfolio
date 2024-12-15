import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/olexey27" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/alexej-krasnokutskij-3a2920235/" },
    { icon: <FaTwitter />, path: "https://x.com/olexey27" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/olexey27/" },
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;