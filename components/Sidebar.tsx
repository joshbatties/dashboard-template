"use client";

import { Card, CardContent } from "@/components/ui/card";
import NavItem from "./NavItem";
import StatusItem from "./StatusItem";
import { Command, Activity, Database, Globe, Shield, Terminal, MessageSquare, Settings } from "lucide-react";

interface SidebarProps {
  systemStatus: number;
  securityLevel: number;
  networkStatus: number;
}

export default function Sidebar({ systemStatus, securityLevel, networkStatus }: SidebarProps) {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-2">
      <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
        <CardContent className="p-4">
          <nav className="space-y-2">
            <NavItem icon={Command} label="Dashboard" active />
            <NavItem icon={Activity} label="Diagnostics" />
            <NavItem icon={Database} label="Data Center" />
            <NavItem icon={Globe} label="Network" />
            <NavItem icon={Shield} label="Security" />
            <NavItem icon={Terminal} label="Console" />
            <NavItem icon={MessageSquare} label="Communications" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="text-xs text-slate-500 mb-2 font-mono">SYSTEM STATUS</div>
            <div className="space-y-3">
              <StatusItem label="Core Systems" value={systemStatus} color="cyan" />
              <StatusItem label="Security" value={securityLevel} color="green" />
              <StatusItem label="Network" value={networkStatus} color="blue" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
