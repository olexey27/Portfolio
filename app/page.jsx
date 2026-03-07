import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Mobile & Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Alexej Krasnokutskij</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              If you would like a quick overview, feel free to download my resume or view it online.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center xl:items-start gap-8">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download CV Button */}
                <a 
                  href="https://drive.google.com/file/d/15EM5QIiF7l2kvW_ozVA7IxtRvwnKVw5o/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase flex items-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <span>English CV</span>
                  <FiDownload className="text-xl" />
                </a>

                <a 
                  href="https://drive.google.com/file/d/156dAPAQrcIqXEnjjG95x9pqHDiYg5LL8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase flex items-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <span>German CV</span>
                  <FiDownload className="text-xl" />
                </a>

                {/* Watch CV Button */}
                <Link 
                  href="/cv"
                  className="uppercase flex items-center gap-2 bg-accent text-primary border border-accent px-4 py-4 text-sm rounded hover:bg-accent-hover transition-all duration-500 font-semibold"
                >
                  <span>Web CV</span>
                  <HiOutlineEye className="text-xl" />
                </Link>

                {/* Certificates Button */}
                <Link 
                  href="/certificates"
                  className="uppercase flex items-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <span>Certificates </span>
                </Link>
              </div>

              <div className="mb-8 xl:mb-0 w-full flex justify-center">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;