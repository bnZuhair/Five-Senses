import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TextInputProps {
  onAdd?: (text: string) => void;
}

export function TextInput({ onAdd }: TextInputProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() && onAdd) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div className="w-full rounded-2xl border-2 border-border/60 bg-surface/30 focus-within:border-primary/50 transition-colors overflow-hidden flex flex-col shadow-sm">
      <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="الصق النص هنا..." 
        className="min-h-[220px] w-full resize-none border-0 bg-transparent p-6 text-base focus-visible:ring-0 placeholder:text-text-secondary/50"
      />
      <div className="bg-surface-card p-4 flex justify-end border-t border-border/50">
        <Button 
          onClick={handleAdd} 
          disabled={!text.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 rounded-xl h-11 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <Plus className="h-5 w-5" />
          <span className="font-bold text-sm">إضافة النص</span>
        </Button>
      </div>
    </div>
  );
}
