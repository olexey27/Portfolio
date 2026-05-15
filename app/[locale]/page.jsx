"use client";

import { useTranslations, useLocale } from "next-intl";
import { FiDownload } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import GitHubActivity from "@/components/GitHubActivity";

const Home = () => {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t("role")}</span>
            <h1 className="h1 mb-6">
              {t("greeting")} <br />
              <span className="text-accent">Alexej Krasnokutskij</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t("description")}
            </p>

            {/* btn and socials */}
            <div className="flex flex-col items-center xl:items-start gap-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/15EM5QIiF7l2kvW_ozVA7IxtRvwnKVw5o/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase flex items-center justify-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500 w-full sm:w-auto"
                >
                  <span>{t("englishCv")}</span>
                  <FiDownload className="text-xl" />
                </a>

                <a
                  href="https://drive.google.com/file/d/156dAPAQrcIqXEnjjG95x9pqHDiYg5LL8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase flex items-center justify-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500 w-full sm:w-auto"
                >
                  <span>{t("germanCv")}</span>
                  <FiDownload className="text-xl" />
                </a>

                <Link
                  href={`/${locale}/cv`}
                  className="uppercase flex items-center justify-center gap-2 bg-accent text-primary border border-accent px-4 py-4 text-sm rounded hover:bg-accent-hover transition-all duration-500 font-semibold w-full sm:w-auto"
                >
                  <span>{t("webCv")}</span>
                  <HiOutlineEye className="text-xl" />
                </Link>

                <Link
                  href={`/${locale}/certificates`}
                  className="uppercase flex items-center justify-center gap-2 border border-accent px-4 py-4 text-sm rounded hover:bg-accent hover:text-primary transition-all duration-500 w-full sm:w-auto"
                >
                  <span>{t("certificates")}</span>
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
      </div >
      <GitHubActivity />
    </section>
  );
};

export default Home;