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
    <div className="w-full">
      <div className="rounded-2xl border-2 border-border/60 bg-transparent p-12 min-h-[280px] flex flex-col items-center justify-center gap-6">
        <Input 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          type="url" 
          placeholder="https://example.com/article" 
          className="max-w-xl h-14 text-lg text-center rounded-xl border-border/60 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20"
          dir="ltr"
        />
        <Button 
          onClick={handleAdd}
          disabled={!url.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
        >
          <Plus className="h-4 w-4" />
          إضافة الرابط
        </Button>
      </div>
    </div>
  );
}
