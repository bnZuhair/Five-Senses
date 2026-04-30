import { FileUp, Link as LinkIcon, Type } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputModeSelectorProps {
  mode: "file" | "text" | "url";
  setMode: (mode: "file" | "text" | "url") => void;
}

export function InputModeSelector({ mode, setMode }: InputModeSelectorProps) {
  const modes = [
    { id: "text", label: "لصق نص", icon: Type },
    { id: "file", label: "رفع ملف", icon: FileUp },
    { id: "url", label: "إضافة رابط", icon: LinkIcon },
  ] as const;

  return (
    <div className="flex justify-center gap-4 mb-8">
      {modes.map((m) => {
        const Icon = m.icon;
        const isActive = mode === m.id;
        
        return (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={cn(
              "flex flex-col items-center justify-center w-32 h-28 rounded-xl border-2 transition-all",
              isActive 
                ? "border-primary bg-primary/5 text-primary" 
                : "border-border/60 bg-transparent text-text-secondary hover:border-primary/50 hover:bg-surface"
            )}
            style={!isActive ? { borderStyle: "dashed" } : undefined}
          >
            <div className={cn(
              "p-3 rounded-full mb-2",
              isActive ? "bg-primary text-white" : "bg-surface text-text-secondary"
            )}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
