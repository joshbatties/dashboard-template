"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "./MetricCard";
import PerformanceChart from "./PerformanceChart";
import ProcessRow from "./ProcessRow";
import StorageItem from "./StorageItem";
import { Activity, RefreshCw, Cpu, HardDrive, Wifi } from "lucide-react";

interface MainContentProps {
  cpuUsage: number;
  memoryUsage: number;
  networkStatus: number;
}

export default function MainContent({ cpuUsage, memoryUsage, networkStatus }: MainContentProps) {
  return (
    <div className="col-span-12 md:col-span-9 lg:col-span-7">
      <div className="grid gap-6">
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
          <CardHeader className="border-b border-slate-700/50 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-slate-100 flex items-center">
                <Activity className="mr-2 h-5 w-5 text-cyan-500" />
                System Overview
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-xs">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                  LIVE
                </Badge>
                <button className="h-8 w-8 text-slate-400">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard title="CPU Usage" value={cpuUsage} icon={Cpu} trend="up" color="cyan" detail="3.8 GHz | 12 Cores" />
              <MetricCard title="Memory" value={memoryUsage} icon={HardDrive} trend="stable" color="purple" detail="16.4 GB / 24 GB" />
              <MetricCard title="Network" value={networkStatus} icon={Wifi} trend="down" color="blue" detail="1.2 GB/s | 42ms" />
            </div>
            <div className="mt-8">
              <Tabs defaultValue="performance" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList className="bg-slate-800/50 p-1">
                    <TabsTrigger value="performance" className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                      Performance
                    </TabsTrigger>
                    <TabsTrigger value="processes" className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                      Processes
                    </TabsTrigger>
                    <TabsTrigger value="storage" className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                      Storage
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                      CPU
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                      Memory
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                      Network
                    </div>
                  </div>
                </div>
                <TabsContent value="performance" className="mt-0">
                  <div className="h-64 w-full relative bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                    <PerformanceChart />
                    <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-700/50">
                      <div className="text-xs text-slate-400">System Load</div>
                      <div className="text-lg font-mono text-cyan-400">{cpuUsage}%</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="processes" className="mt-0">
                  <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                    <div className="grid grid-cols-12 text-xs text-slate-400 p-3 border-b border-slate-700/50 bg-slate-800/50">
                      <div className="col-span-1">PID</div>
                      <div className="col-span-4">Process</div>
                      <div className="col-span-2">User</div>
                      <div className="col-span-2">CPU</div>
                      <div className="col-span-2">Memory</div>
                      <div className="col-span-1">Status</div>
                    </div>
                    <div className="divide-y divide-slate-700/30">
                      <ProcessRow pid="1024" name="system_core.exe" user="SYSTEM" cpu={12.4} memory={345} status="running" />
                      <ProcessRow pid="1842" name="nexus_service.exe" user="SYSTEM" cpu={8.7} memory={128} status="running" />
                      <ProcessRow pid="2156" name="security_monitor.exe" user="ADMIN" cpu={5.2} memory={96} status="running" />
                      <ProcessRow pid="3012" name="network_manager.exe" user="SYSTEM" cpu={3.8} memory={84} status="running" />
                      <ProcessRow pid="4268" name="user_interface.exe" user="USER" cpu={15.3} memory={256} status="running" />
                      <ProcessRow pid="5124" name="data_analyzer.exe" user="ADMIN" cpu={22.1} memory={512} status="running" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="storage" className="mt-0">
                  <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <StorageItem name="System Drive (C:)" total={512} used={324} type="SSD" />
                      <StorageItem name="Data Drive (D:)" total={2048} used={1285} type="HDD" />
                      <StorageItem name="Backup Drive (E:)" total={4096} used={1865} type="HDD" />
                      <StorageItem name="External Drive (F:)" total={1024} used={210} type="SSD" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
