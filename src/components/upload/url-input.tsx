import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface UrlInputProps {
  onAdd?: (url: string) => void;
}

export function UrlInput({ onAdd }: UrlInputProps) {
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    if (url.trim() && onAdd) {
      onAdd(url.trim());
      setUrl("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="w-full rounded-2xl border-2 border-border/60 bg-surface/30 focus-within:border-primary/50 transition-colors overflow-hidden flex flex-col shadow-sm">
      <div className="flex-1 p-8 flex items-center justify-center min-h-[220px]">
        <Input 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          type="url" 
          placeholder="https://example.com/article" 
          className="max-w-xl w-full h-16 text-lg text-center rounded-xl border-2 border-border/80 focus-visible:border-primary focus-visible:ring-primary/20 bg-surface-card shadow-inner transition-all placeholder:text-text-secondary/50"
          dir="ltr"
        />
      </div>
      <div className="bg-surface-card p-4 flex justify-end border-t border-border/50">
        <Button 
          onClick={handleAdd}
          disabled={!url.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 rounded-xl h-11 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <Plus className="h-5 w-5" />
          <span className="font-bold text-sm">إضافة الرابط</span>
        </Button>
      </div>
    </div>
  );
}
