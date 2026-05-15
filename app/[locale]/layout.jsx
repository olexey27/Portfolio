import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import SplashWrapper from "@/components/SplashWrapper";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Alexej Krasnokutskij – Mobile & Web Developer Portfolio",
  description: "Portfolio of Alexej Krasnokutskij – Mobile & Web Developer showcasing projects, skills and experience.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <SplashWrapper>
            <div className="flex flex-col min-h-screen">
              <Header />
              <StairTransition />
              <PageTransition>
                <main className="flex-grow">
                  {children}
                  <SpeedInsights />
                </main>
              </PageTransition>
              <Footer />
            </div>
          </SplashWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}