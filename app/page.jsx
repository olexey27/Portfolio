import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

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
            <span className="text-xl">Junior Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Alexej Krasnokutskij</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              If you would like a quick overview, feel free to download my resume or open it in a separate tab.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a 
                href="/AlexejKrasnokutskij.pdf" // Link zur PDF-Datei im public-Ordner
                download="AlexejKrasnokutskij.pdf" // Dateiname beim Herunterladen
                target="_blank" // Öffnet die Datei in einem neuen Tab
                rel="noopener noreferrer" // Sicherheitsmaßnahme
                className="uppercase flex items-center gap-4 border border-accent px-6 py-2 rounded hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
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
