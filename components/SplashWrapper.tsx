"use client";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <SplashScreen onDone={() => setReady(true)} />}
      {children}
    </>
  );
}