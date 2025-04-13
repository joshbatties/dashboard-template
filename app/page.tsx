"use client";

import { useEffect, useState } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import LoadingOverlay from "@/components/LoadingOverlay";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

// Freeze the initial time so that both server and client start with the same value
const initialTimeValue = new Date();

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [systemStatus, setSystemStatus] = useState(85);
  const [cpuUsage, setCpuUsage] = useState(42);
  const [memoryUsage, setMemoryUsage] = useState(68);
  const [networkStatus, setNetworkStatus] = useState(92);
  const [securityLevel, setSecurityLevel] = useState(75);
  const [currentTime, setCurrentTime] = useState(initialTimeValue);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate changing data for CPU, Memory, Network, and System status
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 30);
      setMemoryUsage(Math.floor(Math.random() * 20) + 60);
      setNetworkStatus(Math.floor(Math.random() * 15) + 80);
      setSystemStatus(Math.floor(Math.random() * 10) + 80);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className={`${theme} min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}>
      <BackgroundCanvas />
      {isLoading && <LoadingOverlay />}
      <div className="container mx-auto p-4 relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="grid grid-cols-12 gap-6">
          <Sidebar systemStatus={systemStatus} securityLevel={securityLevel} networkStatus={networkStatus} />
          <MainContent cpuUsage={cpuUsage} memoryUsage={memoryUsage} networkStatus={networkStatus} />
          <RightSidebar currentTime={currentTime} />
        </div>
      </div>
    </div>
  );
}
