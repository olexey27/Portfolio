import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Alexej Krasnokutskij - Junior Developer Portfolio",
  description: "Portfolio of Alexej Krasnokutskij - Junior Developer showcasing projects, skills and experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
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
      </body>
    </html>
  );
}