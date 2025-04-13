"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Radio, Lock, Zap, CircleOff, RefreshCw, Terminal, Shield, Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import CommunicationItem from "./CommunicationItem";
import ActionButton from "./ActionButton";

interface RightSidebarProps {
  currentTime: Date;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RightSidebar({ currentTime }: RightSidebarProps) {
  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="grid gap-6">
        {/* System time */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1 font-mono">SYSTEM TIME</div>
                <div className="text-3xl font-mono text-cyan-400 mb-1" suppressHydrationWarning={true}>
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-slate-400" suppressHydrationWarning={true}>
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-500 mb-1">Uptime</div>
                  <div className="text-sm font-mono text-slate-200">14d 06:42:18</div>
                </div>
                <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-500 mb-1">Time Zone</div>
                  <div className="text-sm font-mono text-slate-200">UTC-08:00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-100 text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <ActionButton icon={Shield} label="Security Scan" />
              <ActionButton icon={RefreshCw} label="Sync Data" />
              <ActionButton icon={Download} label="Backup" />
              <ActionButton icon={Terminal} label="Console" />
            </div>
          </CardContent>
        </Card>

        {/* Resource allocation */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-100 text-base">Resource Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-slate-400">Processing Power</div>
                  <div className="text-xs text-cyan-400">42% allocated</div>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-slate-400">Memory Allocation</div>
                  <div className="text-xs text-purple-400">68% allocated</div>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-slate-400">Network Bandwidth</div>
                  <div className="text-xs text-blue-400">35% allocated</div>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/50">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-slate-400">Priority Level</div>
                  <div className="flex items-center">
                    <Slider defaultValue={[3]} max={5} step={1} className="w-24 mr-2" />
                    <span className="text-cyan-400">3/5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment controls */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-100 text-base">Environment Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Radio className="text-cyan-500 mr-2 h-4 w-4" />
                  <Label className="text-sm text-slate-400">Power Management</Label>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="text-cyan-500 mr-2 h-4 w-4" />
                  <Label className="text-sm text-slate-400">Security Protocol</Label>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="text-cyan-500 mr-2 h-4 w-4" />
                  <Label className="text-sm text-slate-400">Power Saving Mode</Label>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CircleOff className="text-cyan-500 mr-2 h-4 w-4" />
                  <Label className="text-sm text-slate-400">Auto Shutdown</Label>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
