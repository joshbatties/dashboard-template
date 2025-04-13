import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export default function ActionButton({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <Button variant="outline" className="h-auto py-3 px-3 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center space-y-1 w-full">
      <Icon className="h-5 w-5 text-cyan-500" />
      <span className="text-xs">{label}</span>
    </Button>
  );
}
