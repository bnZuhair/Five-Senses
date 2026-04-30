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
    <div className="w-full flex flex-col gap-4">
      <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="الصق النص هنا..." 
        className="min-h-[220px] w-full resize-none rounded-2xl border-2 border-border/60 bg-transparent p-6 text-base focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20"
      />
      <div className="flex justify-end">
        <Button 
          onClick={handleAdd} 
          disabled={!text.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <Plus className="h-4 w-4" />
          إضافة النص
        </Button>
      </div>
    </div>
  );
}
